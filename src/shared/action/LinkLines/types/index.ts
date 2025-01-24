import { LinkProps } from 'next/link';

export interface LinkLinesProps extends LinkProps {
  title: string;
  //   wrapperClassName?: string; // Новый пропс, не относящийся к картинке
}
