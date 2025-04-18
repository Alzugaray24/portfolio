import React from 'react';
import { Navigation } from '@/components/Navigation';
import ExoticBackground from '@/components/ui/ExoticBackground';

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ExoticBackground />
      <Navigation />
      {children}
    </>
  );
} 