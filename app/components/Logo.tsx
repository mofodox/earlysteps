"use client";

import Link from 'next/link';
import { Baby } from 'lucide-react';

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Baby className="h-6 w-6 text-red-500" strokeWidth={2} />
      <div className="text-xl font-bold text-red-500">EarlySteps</div>
    </Link>
  );
} 