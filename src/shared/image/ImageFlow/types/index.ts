import { ImageProps } from 'next/image';

export interface ImageFlowProps extends ImageProps {
  classNames?: {
    wrapper?: string;
    image?: string;
  };
}
