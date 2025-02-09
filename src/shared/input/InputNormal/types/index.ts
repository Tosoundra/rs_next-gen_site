import { InputHTMLAttributes } from 'react';

export type InputProps = {
  title?: string;
  error?: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;
