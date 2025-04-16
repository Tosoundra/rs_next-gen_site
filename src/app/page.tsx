'use client'
import dynamic from 'next/dynamic';

export default function ClientWrapper() {
  const HomePage = dynamic(() => import('./home'), { ssr: false });

  return <HomePage />;
}
