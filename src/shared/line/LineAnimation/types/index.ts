export type LineAnimationProps = {
  width?: number;
  widthPercent?: number;
  direction?: 'left' | 'right';
  animate?: 'onscroll' | 'onentered';
  classNames?: {
    wrapper?: string;
    line?: string;
  };
};
