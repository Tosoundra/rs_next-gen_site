import { LinkProps } from 'next/link';

export interface LearnMoreProps extends LinkProps {
  title: string;
  //   wrapperClassName?: string; // Новый пропс, не относящийся к картинке
}
