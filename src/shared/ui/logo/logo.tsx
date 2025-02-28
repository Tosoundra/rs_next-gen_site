import React from 'react';

import logo from '/public/ronix-logo.svg';

import Image, { ImageProps } from 'next/image';

type Props = Omit<ImageProps, 'src' | 'alt'>;

const Logo = ({ ...props }: Props) => {
  return <Image {...props} src={logo} alt="logo" />;
};

export default Logo;
