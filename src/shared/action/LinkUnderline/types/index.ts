import { LinkProps } from 'next/link';

export interface LinkUnderlineProps extends LinkProps {
  title: string;
  //   wrapperClassName?: string; // Новый пропс, не относящийся к картинке
}
