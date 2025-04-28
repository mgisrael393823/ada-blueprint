'use client';

import { useState } from 'react';

interface GatedContentProps {
  title: string;
  teaser: string;
  children: React.ReactNode;
}

export default function GatedContent({ title, teaser, children }: GatedContentProps) {
  const [showModal, setShowModal] = useState(false);
  const [showWhyGated, setShowWhyGated] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="bg-gray-50 px-6 py-4">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-600 mb-4">{teaser}</p>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white flex items-center justify-center">
            <button
              onClick={() => setShowModal(true)}
              className="mt-16 px-4 py-2 bg-gray-800 text-white rounded-md flex items-center space-x-2 hover:bg-gray-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>Unlock Full Content</span>
            </button>
          </div>
          <div className="opacity-10 pointer-events-none blur-[3px]">
            {children}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-xl font-semibold mb-4">Unlock Full Access</h3>
            <p className="mb-4">To view this section, please email: misrael00@gmail.com.</p>
            <p className="text-sm text-gray-500 mb-6">(We typically respond within 1 business day.)</p>
            
            <div className="mb-4">
              <button 
                className="text-xs text-gray-500 underline"
                onClick={() => setShowWhyGated(!showWhyGated)}
              >
                Why is this gated?
              </button>
              
              {showWhyGated && (
                <p className="text-sm text-gray-600 mt-2">
                  These sections include proprietary strategies and frameworks we reserve for select clients.
                </p>
              )}
            </div>
            
            <div className="flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
