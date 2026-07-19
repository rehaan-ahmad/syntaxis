
export function StaticGradientFallback() {
  return (
    <div 
      className="fixed inset-0 w-full h-full z-0 overflow-hidden" 
      style={{
        background: 'radial-gradient(ellipse at 20% 30%, var(--color-accent) 0%, var(--color-bg) 70%), radial-gradient(ellipse at 80% 80%, rgba(166, 125, 69, 0.15) 0%, var(--color-bg) 60%)',
        backgroundColor: 'var(--color-bg)'
      }}
    />
  );
}

export default StaticGradientFallback;
