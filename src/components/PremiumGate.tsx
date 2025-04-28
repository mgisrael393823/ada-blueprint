'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface PremiumGateProps {
  title: string;
  teaser: string;
  buttonText: string;
  href: string;
}

export default function PremiumGate({ title, teaser, buttonText, href }: PremiumGateProps) {
  return (
    <div className="w-full max-w-2xl mx-auto my-8 relative">
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0">
          <div className="bg-gray-900 text-white text-xs uppercase font-bold py-1 px-3 rounded-bl">
            Premium Content
          </div>
        </div>
        
        <h2 className="text-xl font-black font-heading mt-4 mb-2">{title}</h2>
        <p className="text-gray-600 mb-4 font-body">{teaser}</p>
        
        <Link 
          href={href}
          className="inline-flex items-center text-gray-900 font-medium hover:underline"
        >
          <span>{buttonText}</span>
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}