export interface TallyPopupOptions {
  layout?: 'modal';
  width?: number;
  hideTitle?: boolean;
  transparentBackground?: boolean;
  emoji?: {
    text?: string;
    animation?: string;
  };
  [key: string]: unknown;
}

export function openTallyModal(
  formId: string,
  options: TallyPopupOptions = {
    layout: 'modal',
    width: 500,
    emoji: {
      text: '👋',
      animation: 'wave'
    }
  }
) {
  const tallyFallback = `https://tally.so/r/${formId}`;

  const trigger = () => {
    if (typeof window !== 'undefined' && window.Tally?.openPopup) {
      window.Tally.openPopup(formId, options);
      return true;
    }
    return false;
  };

  if (!trigger()) {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    script.onload = () => {
      if (!trigger()) {
        window.open(tallyFallback, '_blank', 'noopener,noreferrer');
      }
    };
    script.onerror = () => {
      window.open(tallyFallback, '_blank', 'noopener,noreferrer');
    };
    document.head.appendChild(script);
  }
}
