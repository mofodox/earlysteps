"use client";

import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <div className="relative w-[48px] h-[48px] md:w-[72px] md:h-[72px]">
        <Image 
          src='/images/logo.png'
          alt='EarlySteps Logo'
          fill
          sizes="(max-width: 768px) 48px, 72px"
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
} 