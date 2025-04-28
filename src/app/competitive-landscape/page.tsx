import Layout from '@/components/layout/Layout';
import PremiumGate from '@/components/PremiumGate';

export default function CompetitiveLandscapePage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
          Competitive Landscape Analysis
        </h1>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview of Comparable Properties</h2>
          
          <p className="text-gray-600 mb-6">
            This analysis examines ten comparable luxury apartment properties in the Fulton Market district and surrounding areas that represent the competitive set for 220 N. Ada Street.
          </p>
          
          <PremiumGate
            title="Deep Competitive Analysis"
            teaser="Explore pricing, amenity and positioning benchmarks across 10 comps."
            buttonText="View full analysis"
            href="/competitive-landscape/full"
          />
          
          <div className="mt-12">
            <div className="opacity-10 pointer-events-none blur-[3px]">
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Developer/Manager</th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Units</th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year Built</th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price Range</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2 text-sm text-gray-900">The Dylan Chicago</td>
                      <td className="px-4 py-2 text-sm text-gray-500">169 N Maypole</td>
                      <td className="px-4 py-2 text-sm text-gray-500">Sterling Bay</td>
                      <td className="px-4 py-2 text-sm text-gray-500">250</td>
                      <td className="px-4 py-2 text-sm text-gray-500">2023</td>
                      <td className="px-4 py-2 text-sm text-gray-500">$2,400-$6,500</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm text-gray-900">Fulbrix</td>
                      <td className="px-4 py-2 text-sm text-gray-500">160 N Elizabeth</td>
                      <td className="px-4 py-2 text-sm text-gray-500">Willow Bridge</td>
                      <td className="px-4 py-2 text-sm text-gray-500">375</td>
                      <td className="px-4 py-2 text-sm text-gray-500">2023</td>
                      <td className="px-4 py-2 text-sm text-gray-500">$2,300-$5,800</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-10">
          <div className="opacity-10 pointer-events-none blur-[3px]">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Market Positioning Analysis</h2>
            
            <p className="text-gray-600 mb-4">
              The competitive landscape reveals three distinct pricing tiers among luxury properties:
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Ultra-Luxury Tier</h3>
              <p className="text-gray-600 mb-2"><span className="font-medium">Properties:</span> The Row Fulton Market, 369 Grand by Onni</p>
              <p className="text-gray-600 mb-2"><span className="font-medium">Characteristics:</span></p>
              <ul className="space-y-1 text-gray-600 mb-4">
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>Highest price points ($3,500+ for studios, $22,000+ for penthouses)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>Premium developer/management brands (Related, Onni)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}