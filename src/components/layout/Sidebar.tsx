'use client';

import { useState } from 'react';
import { getAssetPath } from '@/utils/path';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navigationItems = [
  { 
    name: 'Executive Summary', 
    href: getAssetPath('/executive-summary'), 
    gated: false,
    description: 'High-level summary of competitive market, strategic position, and leasing blueprint.'
  },
  { 
    name: 'Market Intelligence', 
    href: getAssetPath('/market-intelligence'), 
    gated: true,
    description: 'Market fundamentals: occupancy rates, rent trends, absorption rates, and supply pipeline.'
  },
  { 
    name: 'Competitive Landscape Analysis', 
    href: getAssetPath('/competitive-landscape'), 
    gated: true,
    description: 'Deep-dive into 10 comparables; pricing tiers; amenity benchmarking.'
  },
  { 
    name: 'Strategic Opportunities', 
    href: getAssetPath('/strategic-opportunities'), 
    gated: true,
    description: 'Target audience segments, positioning strategy, and competitive differentiation.'
  },
  { 
    name: 'Pricing & Incentive Framework', 
    href: getAssetPath('/pricing-framework'), 
    gated: true,
    description: 'Pricing framework by unit type, premium strategy, floor/view/corner premiums, tiered concessions plan.'
  },
  { 
    name: 'Go-to-Market Roadmap', 
    href: getAssetPath('/go-to-market'), 
    gated: true,
    description: 'Full phased marketing launch plan, digital/traditional channel strategy, event activations, retention programs.'
  },
  { 
    name: 'Opportunity Map', 
    href: getAssetPath('/opportunity-map'), 
    gated: false,
    description: 'Summary of key opportunities and success factors.'
  },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  // Remove basePath from pathname for comparison
  const normalizedPathname = pathname.replace(process.env.NEXT_PUBLIC_BASE_PATH || '', '');

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          type="button"
          className="p-2 rounded-md bg-white shadow-md hover:bg-gray-50 transition-colors"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-gray-900" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6 text-gray-900" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Sidebar for mobile */}
      <div
        className={`fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="relative flex flex-col w-72 h-full bg-white shadow-xl">
          <div className="p-3 border-b border-gray-100 flex flex-col items-center">
            <div className="w-full px-2 mb-2">
              <Image
                src="/website logo.png"
                alt="220 ADA Logo"
                width={1024}
                height={1024}
                style={{ width: '100%', height: 'auto' }}
                priority
              />
            </div>
            <p className="text-sm font-body text-gray-600 mt-1 text-center">Lease-Up Strategy & Competitive Blueprint</p>
          </div>
          <nav className="flex-1 px-4 py-6 overflow-y-auto">
            <ul className="space-y-3">
              {navigationItems.map((item) => (
                <li key={item.name} className="group">
                  <Link
                    href={item.href}
                    className={`flex items-center px-4 py-3 text-sm rounded-md transition-all duration-200 ${
                      normalizedPathname === item.href.replace(process.env.NEXT_PUBLIC_BASE_PATH || '', '')
                        ? 'bg-gray-100 text-gray-900 font-medium shadow-sm'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <div>
                      <div className="flex items-center">
                        <span className="text-base font-black">{item.name}</span>
                        {item.gated && (
                          <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 border border-gray-200">
                            Premium
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Sidebar for desktop */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-72 md:flex-col">
        <div className="flex flex-col flex-grow border-r border-gray-100 bg-white overflow-y-auto shadow-md">
          <div className="flex-shrink-0 flex justify-center items-center px-5 py-3 border-b border-gray-100">
            <div className="w-full">
              <Image
                src="/website logo.png"
                alt="220 ADA Logo"
                width={1024}
                height={1024}
                style={{ width: '100%', height: 'auto' }}
                priority
              />
            </div>
          </div>
          <div className="px-6 py-3 border-b border-gray-100">
            <p className="text-sm font-body text-gray-600">Lease-Up Strategy & Competitive Blueprint</p>
          </div>
          <div className="flex-1 flex flex-col">
            <nav className="flex-1 px-4 py-6 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex flex-col px-4 py-3 text-sm rounded-md transition-all duration-200 ${
                    normalizedPathname === item.href.replace(process.env.NEXT_PUBLIC_BASE_PATH || '', '')
                      ? 'bg-gray-50 text-gray-900 shadow-sm border-l-4 border-gray-800'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:border-l-4 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center">
                    <span className="text-base font-black">{item.name}</span>
                    {item.gated && (
                      <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 border border-gray-200">
                        Premium
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {item.description}
                  </p>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
