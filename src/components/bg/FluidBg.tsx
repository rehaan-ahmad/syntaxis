import { useEffect, useRef, useState } from 'react';

// Brand colors from the festival palette
const COLOR_0 = [0.3647, 0.1098, 0.2039]; // #5d1c34 (Crimson Accent)
const COLOR_1 = [0.6510, 0.4902, 0.2706]; // #a67d45 (Brand Gold)
const COLOR_2 = [0.0039, 0.0667, 0.0549]; // #01110e (Deep Background)
const COLOR_3 = [0.8039, 0.7333, 0.6784]; // #cdbbad (Parchment)

const SPEED = 0.58;
const ZOOM = 1.25;
const WARP = 0.0;
const GRAIN = 0.14;
const SEED = 68.5;
const LENS_AMT = 0.73;

const VERTEX_SHADER = `
attribute vec2 a_pos;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER = `
precision highp float;

uniform vec2  u_res;
uniform float u_time;
uniform float u_seed;
uniform float u_scale;
uniform float u_warp;
uniform float u_lensAmt;
uniform float u_grain;
uniform vec3  u_c0;
uniform vec3  u_c1;
uniform vec3  u_c2;
uniform vec3  u_c3;

vec2 cmul(vec2 a, vec2 b) {
  return vec2(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
}

vec2 cdiv(vec2 a, vec2 b) {
  float d = dot(b, b) + 1e-6;
  return vec2(dot(a, b), a.y * b.x - a.x * b.y) / d;
}

vec2 casFocus(int i, float t, float seed, float warp) {
  float fi = float(i);
  float aa = seed * 0.7853 + fi * 2.399963;
  float rr = (0.5 + 0.3 * sin(seed * 1.7 + fi * 2.6)) * (0.8 + warp * 0.06);
  float w1 = 0.083 + 0.034 * fi;
  float w2 = 0.107 + 0.027 * fi;
  return vec2(cos(aa), sin(aa)) * rr + vec2(sin(t * w1 + aa * 2.1), cos(t * w2 + aa * 1.3)) * 0.4;
}

float spreadF(float v, float g) {
  return clamp((v - 0.5) * g + 0.5, 0.0, 1.0);
}

float fieldCassini(vec2 p, float t, float seed, float warp) {
  float phi = log(length(p - casFocus(0, t, seed, warp)) + 0.05)
            + log(length(p - casFocus(1, t, seed, warp)) + 0.05)
            + log(length(p - casFocus(2, t, seed, warp)) + 0.05)
            + log(length(p - casFocus(3, t, seed, warp)) + 0.05);
  phi *= 0.25;
  float v = 0.5 + 0.5 * cos(phi * (0.6 + warp * 1.8) - t * 0.55);
  return spreadF(v, 1.4);
}

vec3 ramp4(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
  t = clamp(t, 0.0, 1.0);
  vec3 col = mix(a, b, smoothstep(0.0, 0.34, t));
  col = mix(col, c, smoothstep(0.33, 0.67, t));
  col = mix(col, d, smoothstep(0.66, 1.0, t));
  return col;
}

float hash(vec2 p, float seed) {
  p = fract(p * 0.3183099 + fract(seed * 0.1031) + 0.1);
  p *= 17.0;
  return fract(p.x * p.y * (p.x + p.y));
}

void main() {
  float mn = sqrt(u_res.x * u_res.y);
  vec2 uv = (gl_FragCoord.xy - 0.5 * u_res) / mn;
  vec2 p = uv * u_scale * 3.0;

  // Mobius lens transform
  float lsc = u_scale * 1.5;
  vec2 w = p / lsc;
  vec2 a = vec2(cos(u_time * 0.07), sin(u_time * 0.09)) * 0.45;
  vec2 lw = cdiv(w - a, vec2(1.0, 0.0) - cmul(vec2(a.x, -a.y), w));
  lw = clamp(lw, -8.0, 8.0);
  p = mix(p, lw * lsc, u_lensAmt);

  float f = fieldCassini(p, u_time, u_seed, u_warp);
  f = smoothstep(0.08, 0.92, f);

  vec3 col = ramp4(f, u_c0, u_c1, u_c2, u_c3);
  col += smoothstep(0.72, 1.0, f) * 0.12;

  float grPhase = mod(floor(u_time * 10.0), 61.0) * 1.7;
  float gr = hash(gl_FragCoord.xy * 0.731 + grPhase, u_seed) - 0.5;
  col += gr * u_grain;
  col *= 1.0 - 0.22 * dot(uv, uv);

  gl_FragColor = vec4(col, 1.0);
}
`;

function isWebGLAvailable(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

export function FluidBg() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!isWebGLAvailable()) {
      setHasError(true);
      return;
    }

    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    const gl = (canvas.getContext('webgl', {
      alpha: false,
      antialias: false,
      depth: false,
      stencil: false,
      powerPreference: 'low-power',
      preserveDrawingBuffer: false,
    }) || canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null;

    if (!gl) {
      setHasError(true);
      return;
    }

    const handleContextLost = (e: Event) => {
      e.preventDefault();
      setHasError(true);
    };
    canvas.addEventListener('webglcontextlost', handleContextLost);

    const compileShader = (type: number, source: string): WebGLShader | null => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vert = compileShader(gl.VERTEX_SHADER, VERTEX_SHADER);
    const frag = compileShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    if (!vert || !frag) {
      setHasError(true);
      return;
    }

    const program = gl.createProgram();
    if (!program) {
      setHasError(true);
      return;
    }

    gl.attachShader(program, vert);
    gl.attachShader(program, frag);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      setHasError(true);
      return;
    }

    gl.useProgram(program);

    // Fullscreen triangle (1 draw call, 3 vertices)
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW
    );

    const aPos = gl.getAttribLocation(program, 'a_pos');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    // Uniforms
    const uRes = gl.getUniformLocation(program, 'u_res');
    const uTime = gl.getUniformLocation(program, 'u_time');
    const uSeed = gl.getUniformLocation(program, 'u_seed');
    const uScale = gl.getUniformLocation(program, 'u_scale');
    const uWarp = gl.getUniformLocation(program, 'u_warp');
    const uLensAmt = gl.getUniformLocation(program, 'u_lensAmt');
    const uGrain = gl.getUniformLocation(program, 'u_grain');
    const uC0 = gl.getUniformLocation(program, 'u_c0');
    const uC1 = gl.getUniformLocation(program, 'u_c1');
    const uC2 = gl.getUniformLocation(program, 'u_c2');
    const uC3 = gl.getUniformLocation(program, 'u_c3');

    gl.uniform1f(uSeed, SEED);
    gl.uniform1f(uScale, ZOOM);
    gl.uniform1f(uWarp, WARP);
    gl.uniform1f(uLensAmt, LENS_AMT);
    gl.uniform1f(uGrain, GRAIN);
    gl.uniform3f(uC0, COLOR_0[0], COLOR_0[1], COLOR_0[2]);
    gl.uniform3f(uC1, COLOR_1[0], COLOR_1[1], COLOR_1[2]);
    gl.uniform3f(uC2, COLOR_2[0], COLOR_2[1], COLOR_2[2]);
    gl.uniform3f(uC3, COLOR_3[0], COLOR_3[1], COLOR_3[2]);

    let width = 0;
    let height = 0;

    // Cap DPR to 1.0 on mobile and 1.25 on desktop for buttery-smooth 60fps and zero lag
    const resize = () => {
      const dpr = isMobile ? 1.0 : Math.min(window.devicePixelRatio || 1, 1.25);
      const rect = container.getBoundingClientRect();
      const w = Math.max(1, Math.floor(rect.width * dpr));
      const h = Math.max(1, Math.floor(rect.height * dpr));

      if (width !== w || height !== h) {
        width = w;
        height = h;
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
        if (uRes) gl.uniform2f(uRes, w, h);
      }
    };

    resize();
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(resize) : null;
    ro?.observe(container);

    let rafId = 0;
    let lastTime = performance.now();
    let simTime = 0;
    let isVisible = true;

    // Render single frame
    const renderFrame = () => {
      if (gl.isContextLost()) return;
      if (uTime) gl.uniform1f(uTime, simTime);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    // If reduced motion is requested, render once and stop
    if (prefersReducedMotion) {
      renderFrame();
      return () => {
        ro?.disconnect();
        canvas.removeEventListener('webglcontextlost', handleContextLost);
      };
    }

    const onVisibilityChange = () => {
      isVisible = document.visibilityState !== 'hidden';
      if (isVisible) {
        lastTime = performance.now();
        loop(lastTime);
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    const loop = (now: number) => {
      if (!isVisible) return;
      const delta = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;
      simTime += delta * SPEED;

      renderFrame();
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      canvas.removeEventListener('webglcontextlost', handleContextLost);
      ro?.disconnect();
      gl.deleteProgram(program);
      gl.deleteShader(vert);
      gl.deleteShader(frag);
      gl.deleteBuffer(positionBuffer);
    };
  }, []);

  if (hasError) {
    // Beautiful gradient fallback in case WebGL is unavailable on low-end device
    return (
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(93, 28, 52, 0.5), rgba(17, 16, 14, 0.95)), radial-gradient(ellipse 60% 60% at 80% 80%, rgba(166, 125, 69, 0.3), rgba(17, 16, 14, 1))',
          backgroundColor: '#11100e',
        }}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none -z-10"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}

export default FluidBg;
