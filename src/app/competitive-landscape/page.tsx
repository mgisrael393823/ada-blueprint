import Layout from '@/components/layout/Layout';

export default function CompetitiveLandscapePage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
          Competitive Landscape Analysis
        </h1>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview of Comparable Properties</h2>
          
          <p className="text-gray-600 mb-4">
            This analysis examines ten comparable luxury apartment properties in the Fulton Market district and surrounding areas that represent the competitive set for 220 N. Ada Street.
          </p>
          
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
                <tr>
                  <td className="px-4 py-2 text-sm text-gray-900">The Elizabeth Chicago</td>
                  <td className="px-4 py-2 text-sm text-gray-500">225 N Elizabeth</td>
                  <td className="px-4 py-2 text-sm text-gray-500">Sterling Bay</td>
                  <td className="px-4 py-2 text-sm text-gray-500">350</td>
                  <td className="px-4 py-2 text-sm text-gray-500">2023</td>
                  <td className="px-4 py-2 text-sm text-gray-500">$2,000-$7,375</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-sm text-gray-900">Cassidy on Canal</td>
                  <td className="px-4 py-2 text-sm text-gray-500">350 N Canal</td>
                  <td className="px-4 py-2 text-sm text-gray-500">Habitat Company</td>
                  <td className="px-4 py-2 text-sm text-gray-500">343</td>
                  <td className="px-4 py-2 text-sm text-gray-500">2024</td>
                  <td className="px-4 py-2 text-sm text-gray-500">$2,557-$7,884</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-sm text-gray-900">One Six Six</td>
                  <td className="px-4 py-2 text-sm text-gray-500">166 N Aberdeen</td>
                  <td className="px-4 py-2 text-sm text-gray-500">Greystar</td>
                  <td className="px-4 py-2 text-sm text-gray-500">320</td>
                  <td className="px-4 py-2 text-sm text-gray-500">2023</td>
                  <td className="px-4 py-2 text-sm text-gray-500">$2,230-$7,995</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-sm text-gray-900">Arthur on Aberdeen</td>
                  <td className="px-4 py-2 text-sm text-gray-500">210 N Aberdeen</td>
                  <td className="px-4 py-2 text-sm text-gray-500">Willow Bridge</td>
                  <td className="px-4 py-2 text-sm text-gray-500">363</td>
                  <td className="px-4 py-2 text-sm text-gray-500">2024</td>
                  <td className="px-4 py-2 text-sm text-gray-500">$2,300-$5,341</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-sm text-gray-900">Parq Fulton</td>
                  <td className="px-4 py-2 text-sm text-gray-500">1400 W Randolph</td>
                  <td className="px-4 py-2 text-sm text-gray-500">Marquette</td>
                  <td className="px-4 py-2 text-sm text-gray-500">278</td>
                  <td className="px-4 py-2 text-sm text-gray-500">2023</td>
                  <td className="px-4 py-2 text-sm text-gray-500">$2,606-$10,714</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-sm text-gray-900">The Row Fulton Market</td>
                  <td className="px-4 py-2 text-sm text-gray-500">164 N Peoria</td>
                  <td className="px-4 py-2 text-sm text-gray-500">Related</td>
                  <td className="px-4 py-2 text-sm text-gray-500">300</td>
                  <td className="px-4 py-2 text-sm text-gray-500">2023</td>
                  <td className="px-4 py-2 text-sm text-gray-500">$3,565-$22,995</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-sm text-gray-900">369 Grand by Onni</td>
                  <td className="px-4 py-2 text-sm text-gray-500">369 W Grand</td>
                  <td className="px-4 py-2 text-sm text-gray-500">Onni Group</td>
                  <td className="px-4 py-2 text-sm text-gray-500">356</td>
                  <td className="px-4 py-2 text-sm text-gray-500">2024</td>
                  <td className="px-4 py-2 text-sm text-gray-500">$2,151-$77,776</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-sm text-gray-900">Coppia</td>
                  <td className="px-4 py-2 text-sm text-gray-500">1101 W Van Buren</td>
                  <td className="px-4 py-2 text-sm text-gray-500">Village Green</td>
                  <td className="px-4 py-2 text-sm text-gray-500">298</td>
                  <td className="px-4 py-2 text-sm text-gray-500">2023</td>
                  <td className="px-4 py-2 text-sm text-gray-500">$2,265-$4,240</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        
        <section className="mb-10">
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
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Exceptional finishes and extensive amenity packages</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Emphasis on exclusivity and service</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Limited or no concessions even during lease-up</span>
              </li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-900 mb-3">Premium Luxury Tier</h3>
            <p className="text-gray-600 mb-2"><span className="font-medium">Properties:</span> The Elizabeth Chicago, Cassidy on Canal, One Six Six, Arthur on Aberdeen, Parq Fulton</p>
            <p className="text-gray-600 mb-2"><span className="font-medium">Characteristics:</span></p>
            <ul className="space-y-1 text-gray-600 mb-4">
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Mid-to-high price points ($2,300-$3,500 for studios, $4,000-$10,000 for larger units)</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Strong emphasis on design and amenities</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Established developers with luxury track record</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Moderate concessions during lease-up (typically 1 month free)</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Marketing focus on lifestyle and neighborhood</span>
              </li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-900 mb-3">Accessible Luxury Tier</h3>
            <p className="text-gray-600 mb-2"><span className="font-medium">Properties:</span> The Dylan Chicago, Fulbrix, Coppia</p>
            <p className="text-gray-600 mb-2"><span className="font-medium">Characteristics:</span></p>
            <ul className="space-y-1 text-gray-600 mb-4">
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>More attainable price points ($2,200-$2,800 for studios, $3,500-$5,000 for larger units)</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Quality finishes but less extensive amenity packages</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>More aggressive concessions during lease-up (1-1.5 months free)</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Marketing focus on value and neighborhood access</span>
              </li>
            </ul>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pricing Analysis</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Studio Units</h3>
              <ul className="space-y-1 text-gray-600">
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span><span className="font-medium">Price Range:</span> $2,151 (369 Grand) to $3,565 (The Row)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span><span className="font-medium">Average Starting Price:</span> $2,430</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span><span className="font-medium">Square Footage Range:</span> 415-589 sq ft</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span><span className="font-medium">Price Per Square Foot:</span> $4.30-$6.05</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-3">One-Bedroom Units</h3>
              <ul className="space-y-1 text-gray-600">
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span><span className="font-medium">Price Range:</span> $2,606 (Parq Fulton) to $4,975 (The Row)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span><span className="font-medium">Average Starting Price:</span> $3,220</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span><span className="font-medium">Square Footage Range:</span> 542-780 sq ft</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span><span className="font-medium">Price Per Square Foot:</span> $4.15-$5.80</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Two-Bedroom Units</h3>
              <ul className="space-y-1 text-gray-600">
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span><span className="font-medium">Price Range:</span> $3,207 (Parq Fulton) to $10,714 (Parq Fulton Penthouse)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span><span className="font-medium">Average Starting Price:</span> $4,800</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span><span className="font-medium">Square Footage Range:</span> 780-1,474 sq ft</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span><span className="font-medium">Price Per Square Foot:</span> $3.95-$5.50</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Three+ Bedroom Units</h3>
              <ul className="space-y-1 text-gray-600">
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span><span className="font-medium">Price Range:</span> $6,000 (Parq Fulton) to $22,995 (The Row)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span><span className="font-medium">Average Starting Price:</span> $9,500</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span><span className="font-medium">Square Footage Range:</span> 1,200-1,988 sq ft</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span><span className="font-medium">Price Per Square Foot:</span> $3.85-$5.25</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
