'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navigationItems = [
  { name: 'Executive Summary', href: '/executive-summary', gated: false },
  { name: 'Market Intelligence', href: '/market-intelligence', gated: false },
  { name: 'Competitive Landscape Analysis', href: '/competitive-landscape', gated: false },
  { name: 'Strategic Opportunities', href: '/strategic-opportunities', gated: true },
  { name: 'Pricing & Incentive Framework', href: '/pricing-framework', gated: true },
  { name: 'Go-to-Market Roadmap', href: '/go-to-market', gated: true },
  { name: 'Opportunity Map', href: '/opportunity-map', gated: false },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <button
          type="button"
          className="p-2 rounded-md bg-white shadow-md"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          {isOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Sidebar for mobile */}
      <div
        className={`fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="relative flex flex-col w-64 h-full bg-white shadow-xl">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">220 Ada</h2>
            <p className="text-sm text-gray-600">Lease-Up Strategy & Competitive Blueprint</p>
          </div>
          <nav className="flex-1 px-2 py-4 overflow-y-auto">
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center px-4 py-2 text-sm rounded-md ${
                      pathname === item.href
                        ? 'bg-gray-100 text-gray-900 font-medium'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                    {item.gated && (
                      <span className="ml-2 text-xs px-1.5 py-0.5 rounded-full bg-gray-100 text-gray-500">
                        Gated
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Sidebar for desktop */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <div className="flex flex-col flex-grow border-r border-gray-200 bg-white overflow-y-auto">
          <div className="flex-shrink-0 flex items-center h-16 px-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold">220 Ada</h2>
          </div>
          <div className="px-4 py-2 border-b border-gray-200">
            <p className="text-sm text-gray-600">Lease-Up Strategy & Competitive Blueprint</p>
          </div>
          <div className="flex-1 flex flex-col">
            <nav className="flex-1 px-2 py-4 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    pathname === item.href
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <span className="truncate">{item.name}</span>
                  {item.gated && (
                    <span className="ml-2 text-xs px-1.5 py-0.5 rounded-full bg-gray-100 text-gray-500">
                      Gated
                    </span>
                  )}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
