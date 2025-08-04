// Утилиты для определения типа устройства и оптимизации производительности

export const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth <= 768;
};

export const isTablet = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth > 768 && window.innerWidth <= 1024;
};

export const isDesktop = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth > 1024;
};

export const shouldReduceMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches || isMobile();
};

export const getOptimalScrollTriggerSettings = () => {
  const mobile = isMobile();
  
  return {
    // Отключаем сложные анимации на мобильных
    enabled: !mobile,
    // Оптимизированные настройки для производительности
    fastScrollEnd: true,
    preventOverlaps: true,
    // Уменьшаем частоту обновлений на мобильных
    refreshPriority: mobile ? -1 : 1,
  };
}; 