export const slowScrollToTop = () => {
    const position = document.documentElement.scrollTop || document.body.scrollTop;
    
    if (position > 0) {
      window.requestAnimationFrame(() => {
        window.scrollTo(0, position - position / 36);
        slowScrollToTop();
      });
    }
  };
  