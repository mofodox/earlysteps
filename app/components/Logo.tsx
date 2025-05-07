"use client";

import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image 
        src='/images/logo.png'
        alt='EarlySteps Logo'
        width={72}
        height={72}
      />
    </Link>
  );
} 