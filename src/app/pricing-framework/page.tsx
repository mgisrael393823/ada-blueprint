import Layout from '@/components/layout/Layout';

export default function PricingFrameworkPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
          Pricing & Incentive Framework
        </h1>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          
          <p className="text-gray-600 mb-6">
            Learn how 220 N. Ada Street uses a flexible, dynamic pricing strategy and targeted incentives to balance premium rent positioning with market penetration.
          </p>
          
          <div className="mt-8">
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Recommended Price Positioning</h2>
              
              <p className="text-gray-600 mb-4">
                Based on the comprehensive analysis of the competitive landscape, 220 N. Ada Street should be positioned in the <strong>Premium Luxury Tier</strong> with the following specific pricing strategy:
              </p>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit Type</th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recommended Price Range</th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price per Square Foot</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2 text-sm text-gray-900">Studio</td>
                      <td className="px-4 py-2 text-sm text-gray-500">$2,350 - $2,800</td>
                      <td className="px-4 py-2 text-sm text-gray-500">$4.80 - $5.20/sq ft</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm text-gray-900">1 Bedroom</td>
                      <td className="px-4 py-2 text-sm text-gray-500">$3,100 - $3,800</td>
                      <td className="px-4 py-2 text-sm text-gray-500">$4.70 - $5.00/sq ft</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm text-gray-900">2 Bedroom</td>
                      <td className="px-4 py-2 text-sm text-gray-500">$4,200 - $5,500</td>
                      <td className="px-4 py-2 text-sm text-gray-500">$4.50 - $4.80/sq ft</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm text-gray-900">3 Bedroom (if applicable)</td>
                      <td className="px-4 py-2 text-sm text-gray-500">$6,500 - $8,500</td>
                      <td className="px-4 py-2 text-sm text-gray-500">$4.30 - $4.60/sq ft</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-gray-600 mb-6">
                This pricing strategy positions 220 N. Ada Street competitively within the Premium Luxury Tier, above more accessible options like The Dylan Chicago and Fulbrix, while remaining attainable compared to ultra-luxury options like The Row Fulton Market and 369 Grand by Onni.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Premium Strategies</h2>
              
              <p className="text-gray-600 mb-4">
                To maximize revenue potential, implement the following premium pricing strategies:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Floor Premium Strategy</h3>
                  <p className="text-gray-600 mb-2">Implement a tiered floor premium structure:</p>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <span><span className="font-medium">Floors 1-3:</span> Base pricing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <span><span className="font-medium">Floors 4-7:</span> 5% premium over base</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <span><span className="font-medium">Floors 8-12:</span> 10% premium over base</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <span><span className="font-medium">Floors 13+:</span> 15% premium over base</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">View Premium Strategy</h3>
                  <p className="text-gray-600 mb-2">Apply additional premiums based on view quality:</p>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <span><span className="font-medium">Standard Views:</span> Base pricing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <span><span className="font-medium">Partial City Views:</span> 3-5% premium</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <span><span className="font-medium">Premium City Views:</span> 5-8% premium</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <span><span className="font-medium">Unobstructed Skyline Views:</span> 8-12% premium</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Corner Unit Premium</h3>
                  <p className="text-gray-600 mb-2">Apply a 3-7% premium for corner units, which typically offer:</p>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <span>Additional windows and natural light</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <span>Enhanced privacy (fewer shared walls)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <span>Often larger floor plans or unique layouts</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Penthouse Collection</h3>
                  <p className="text-gray-600 mb-2">For top-floor units, create a distinctive "Penthouse Collection" with:</p>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <span>25-35% premium over base pricing for comparable floor plans</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <span>Enhanced finish package with upgraded materials and features</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <span>Exclusive resident benefits or services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <span>Distinctive marketing approach and materials</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Lease-Up Concessions</h2>
              
              <p className="text-gray-600 mb-4">
                To drive leasing velocity during the initial lease-up period, implement a tiered concession strategy:
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3">Phase 1: Initial Launch (First 30% of Units)</h3>
                <ul className="space-y-1 text-gray-600">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span><span className="font-medium">Offer:</span> Up to 1.5 months free on 12+ month leases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span><span className="font-medium">Target:</span> Early adopters and prospects already in the market</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span><span className="font-medium">Duration:</span> Approximately first 2-3 months of leasing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span><span className="font-medium">Application:</span> Apply to all unit types with emphasis on harder-to-lease floor plans</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3">Phase 2: Mid Lease-Up (Next 30% of Units)</h3>
                <ul className="space-y-1 text-gray-600">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span><span className="font-medium">Offer:</span> 1 month free on 12+ month leases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span><span className="font-medium">Target:</span> Prospects responding to initial marketing momentum</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span><span className="font-medium">Duration:</span> Approximately months 3-5 of leasing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span><span className="font-medium">Application:</span> Apply to all unit types except premium/penthouse units</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3">Phase 3: Final Lease-Up (Remaining 40% of Units)</h3>
                <ul className="space-y-1 text-gray-600">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span><span className="font-medium">Offer:</span> Reduced concessions (0.5 month free) on 12+ month leases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span><span className="font-medium">Target:</span> Prospects responding to established property reputation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span><span className="font-medium">Duration:</span> Approximately months 6-10 of leasing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span><span className="font-medium">Application:</span> Apply selectively to remaining inventory with focus on less desirable units</span>
                  </li>
                </ul>
              </div>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Flexible Lease Terms</h2>
              
              <p className="text-gray-600 mb-4">
                Offer varied lease lengths with appropriate premiums:
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">1.</span>
                    <span><span className="font-medium">Standard Lease:</span> 12-month term (base rent)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">2.</span>
                    <span><span className="font-medium">Short-Term Premium:</span> 3-6 month leases at 15-20% premium</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">3.</span>
                    <span><span className="font-medium">Extended Term Incentive:</span> 15-18 month leases with additional 0.5 month free</span>
                  </li>
                </ul>
              </div>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Renewal Strategy</h2>
              
              <p className="text-gray-600 mb-4">
                Implement a strategic renewal approach to maximize retention:
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">1.</span>
                    <span><span className="font-medium">Standard Renewal Increase:</span> 3-5% for average units and residents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">2.</span>
                    <span><span className="font-medium">Premium Resident Discount:</span> 2-3% for high-value residents with excellent payment history</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">3.</span>
                    <span><span className="font-medium">High-Demand Unit Premium:</span> 5-7% for units with waiting lists or high demand</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">4.</span>
                    <span><span className="font-medium">Seasonal Adjustment:</span> Lower increases during off-peak seasons, higher during peak demand</span>
                  </li>
                </ul>
              </div>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Implementation Timeline</h2>
              
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3">Pre-Opening Phase</h3>
                <p className="text-gray-600 mb-2">6-8 Months Before Opening:</p>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span>Finalize brand positioning and identity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span>Develop detailed unit pricing matrix</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span>Establish competitive tracking system</span>
                  </li>
                </ul>
                
                <h3 className="text-xl font-medium text-gray-900 mb-3">Lease-Up Phase</h3>
                <p className="text-gray-600 mb-2">From Opening to Stabilization:</p>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span><span className="font-medium">Months 1-3:</span> Implement Phase 1 concession strategy (up to 1.5 months free)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span><span className="font-medium">Months 4-6:</span> Transition to Phase 2 concession strategy (1 month free)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span><span className="font-medium">Months 7-10:</span> Implement Phase 3 concession strategy (reduced concessions)</span>
                  </li>
                </ul>
                
                <h3 className="text-xl font-medium text-gray-900 mb-3">Stabilization Phase</h3>
                <p className="text-gray-600 mb-2">Post-85% Occupancy:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span>Eliminate new lease concessions (except seasonally as needed)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span>Implement renewal pricing strategy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span>Establish ongoing competitive monitoring system</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </section>
      </div>
    </Layout>
  );
}