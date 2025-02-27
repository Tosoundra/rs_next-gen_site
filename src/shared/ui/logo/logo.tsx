import React from 'react';
import { ImageFlow } from '../../image';
import logo from '/public/ronix-logo.svg';
import { ImageFlowProps } from '../../image/ImageFlow/types';

type Props = Omit<ImageFlowProps, 'src' | 'alt'>;

const Logo = ({ ...props }: Props) => {
  return <ImageFlow {...props} src={logo} alt="logo" />;
};

export default Logo;
