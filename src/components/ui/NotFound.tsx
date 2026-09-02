import { motion } from 'framer-motion';
import { Home, AlertOctagon } from 'lucide-react';
import Card from './Card';

export function NotFound() {
  const handleReturnHome = () => {
    window.location.href = import.meta.env.BASE_URL || '/';
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-6 py-20 relative z-20 bg-[var(--color-bg)]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-lg w-full text-center"
      >
        <Card className="p-8 sm:p-12 border-2 border-[var(--color-brand)]/70 bg-[var(--color-bg-glass)] backdrop-blur-xl shadow-[0_0_40px_var(--color-brand-glow)] flex flex-col items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-[var(--color-accent)]/30 border border-[var(--color-accent)] flex items-center justify-center text-[var(--color-brand)]">
            <AlertOctagon className="w-8 h-8 text-[var(--color-brand)] animate-pulse" />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-6xl sm:text-7xl font-extrabold font-heading text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand)] via-[var(--color-text-pri)] to-[var(--color-accent)] tracking-widest">
              404
            </span>
            <h1 className="text-xl sm:text-2xl font-bold font-heading text-[var(--color-text-pri)] uppercase tracking-wider">
              Lost in Syntax
            </h1>
            <p className="text-xs sm:text-sm text-[var(--color-text-body)] leading-relaxed mt-2">
              The coordinate or endpoint you are looking for does not exist in the Syntaxis 2026 matrix.
            </p>
          </div>

          <button
            onClick={handleReturnHome}
            className="mt-4 w-full py-3.5 px-6 rounded-[var(--radius-md)] bg-[var(--color-brand)] text-[var(--color-bg)] font-bold text-xs uppercase font-heading tracking-wider flex items-center justify-center gap-2 hover:scale-105 hover:shadow-[0_0_25px_var(--color-brand-glow)] transition-all duration-200 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Return to Syntaxis Home</span>
          </button>
        </Card>
      </motion.div>
    </div>
  );
}

export default NotFound;
