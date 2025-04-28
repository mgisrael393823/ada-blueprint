import Layout from '@/components/layout/Layout';

export default function HomePage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
          220 Ada – Lease-Up Strategy & Competitive Blueprint
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          This comprehensive analysis provides actionable insights for the lease-up and pre-leasing strategy for 220 N. Ada Street in Chicago's Fulton Market district. The property is positioned to capitalize on the neighborhood's exceptional dining, entertainment, and employment opportunities in one of Chicago's most dynamic and sought-after neighborhoods.
        </p>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Navigation Guide</h2>
          <p className="text-gray-600 mb-4">
            Use the sidebar navigation to explore different sections of the presentation:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span><span className="font-medium">Executive Summary:</span> Key findings and strategic recommendations</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span><span className="font-medium">Market Intelligence:</span> Chicago multifamily market and Fulton Market district analysis</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span><span className="font-medium">Competitive Landscape Analysis:</span> Detailed analysis of comparable properties</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span><span className="font-medium">Strategic Opportunities:</span> Brand positioning and target audience strategies (Gated)</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span><span className="font-medium">Pricing & Incentive Framework:</span> Detailed pricing recommendations (Gated)</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span><span className="font-medium">Go-to-Market Roadmap:</span> Implementation timeline and marketing tactics (Gated)</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span><span className="font-medium">Opportunity Map:</span> Summary of key opportunities and success factors</span>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
