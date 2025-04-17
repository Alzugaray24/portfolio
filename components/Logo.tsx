"use client";

import React from 'react';

export function Logo() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 0C8.954 0 0 8.954 0 20C0 31.046 8.954 40 20 40C31.046 40 40 31.046 40 20C40 8.954 31.046 0 20 0ZM20 6C26.627 6 32 11.373 32 18C32 24.627 26.627 30 20 30C13.373 30 8 24.627 8 18C8 11.373 13.373 6 20 6Z"
        fill="url(#logoGradient)"
      />
      <defs>
        <linearGradient id="logoGradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#986BEA" />
          <stop offset="100%" stopColor="#6A11CB" />
        </linearGradient>
      </defs>
    </svg>
  );
} 