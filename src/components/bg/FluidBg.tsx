export function FluidBg() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
      dangerouslySetInnerHTML={{
        __html:
          '<fluid-bg fixed hash="#p=0.58,1.25,0,0.14,1,19,0,8,68.5,0.8,0.85,1,0,0,21,0,0,0,0,0,6102068,10911045,69902,13482925,0,0,0,0,0,3,73" style="position:fixed;inset:0;width:100vw;height:100vh;z-index:-1;"></fluid-bg>',
      }}
    />
  );
}

export default FluidBg;
