import { LineAnimationProps } from '../types';
import styles from './styles.module.scss';

const LineAnimation = ({
  width,
  widthPercent = 100,
  direction = 'left',
  animate = 'onscroll',
  classNames,
}: LineAnimationProps) => {
  return (
    <div
      className={`${styles.wrapper} ${classNames?.wrapper && classNames.wrapper} flex ${direction === 'left' ? styles.left : styles.right}`}
    >
      <div
        className={`${styles.line} ${classNames?.line && classNames.line} ${styles[animate]}`}
        style={{ width: `${width ? width + 'px' : widthPercent + '%'}` }}
      ></div>
    </div>
  );
};

export default LineAnimation;
