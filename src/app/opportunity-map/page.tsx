import Layout from '@/components/layout/Layout';

export default function OpportunityMapPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
          Opportunity Map
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          220 N. Ada Street has significant potential to achieve premium rents and strong leasing velocity by leveraging its location in the desirable Fulton Market district. This opportunity map highlights the key advantages, market opportunities, and success factors for the property.
        </p>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Market Opportunity Overview</h2>
          
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <div>
                  <span className="font-medium">Occupancy Rates:</span> The overall Chicago multifamily market maintains healthy occupancy rates averaging 94.2%, with Class A properties in prime neighborhoods achieving occupancy rates of 95-96%.
                </div>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <div>
                  <span className="font-medium">Rent Growth:</span> After a period of accelerated growth in 2023-2024, rent increases have moderated to a sustainable 3.2% year-over-year growth rate across the Chicago market. Luxury properties in prime locations continue to outperform the broader market with 4-5% annual rent growth.
                </div>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <div>
                  <span className="font-medium">Development Pipeline:</span> Chicago's development pipeline remains active with approximately 8,500 units under construction citywide, with nearly 30% concentrated in the West Loop/Fulton Market area. This represents a slight decrease from the peak construction levels of 2022-2023.
                </div>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <div>
                  <span className="font-medium">Absorption:</span> Net absorption remains positive, with newly delivered luxury properties achieving stabilization within 10-12 months on average, though this timeline can extend to 14-16 months for larger developments with 300+ units.
                </div>
              </li>
            </ul>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Competitive Advantages</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Location Excellence</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>Prime position in one of Chicago's most dynamic and sought-after neighborhoods</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>Exceptional walkability to dining, entertainment, and employment</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>Proximity to major employers including Google, McDonald's, and Mondelez headquarters</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>Excellent transportation access via CTA Green/Pink Lines, multiple bus routes, and major highways</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Market Timing</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>Entering market as Chicago multifamily sector remains fundamentally strong</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>Luxury segment showing particularly strong performance in high-demand areas</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>Moderated supply growth projected in late 2025 and 2026, creating favorable conditions</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>Continued flight to quality among renters willing to pay premium for best-in-class properties</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Brand Differentiation</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>Position as a boutique luxury residence with intimate community atmosphere</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>Authentic connection to Fulton Market's industrial heritage and culinary innovation</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>Curated living experience with personalized resident services</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>Sophisticated urban retreat that contrasts with corporate luxury of competitors like Cassidy on Canal and Parq Fulton</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Demand Drivers</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span><span className="font-medium">Employment Concentration:</span> Major companies established significant presence, creating natural demand for nearby housing</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span><span className="font-medium">Lifestyle Amenities:</span> Exceptional concentration of dining, entertainment, and cultural destinations</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span><span className="font-medium">Accessibility:</span> Excellent connectivity with public transit, highway access, and high walkability</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span><span className="font-medium">Demographic Alignment:</span> Perfect match with preferences of luxury renters</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Target Audience Opportunities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Primary Target: Urban Sophisticates (35-45)</h3>
              <ul className="space-y-1 text-gray-600">
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>High-income professionals in creative, tech, and financial industries</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>Value design, authenticity, and neighborhood character</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>Willing to pay premium for quality and location</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>Currently living in other luxury buildings but seeking more character</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Secondary Target: Affluent Empty Nesters (55-65)</h3>
              <ul className="space-y-1 text-gray-600">
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>Downsizing from suburban homes</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>Seeking walkable, amenity-rich urban lifestyle</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>Value security, service, and community</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>Appreciate culinary experiences and cultural offerings</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Tertiary Target: Young Professionals (28-34)</h3>
              <ul className="space-y-1 text-gray-600">
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>Rising careers in tech, consulting, and finance</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>Design-conscious and brand-aware</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>Seeking status and social connection</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>Value convenience and lifestyle amenities</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pricing Opportunities</h2>
          
          <div className="mb-6">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Premium Luxury Tier Positioning</h3>
              <p className="text-gray-600 mb-3">Position 220 N. Ada Street in the Premium Luxury Tier with the following specific pricing strategy:</p>
              <div className="overflow-x-auto">
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
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Premium Opportunities</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span><span className="font-medium">Floor Premium:</span> 5-15% based on height tiers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span><span className="font-medium">View Premium:</span> 3-12% based on view quality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span><span className="font-medium">Corner Units:</span> 3-7% premium for better light and privacy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span><span className="font-medium">Penthouse Collection:</span> 25-35% premium with enhanced finishes</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Tiered Concession Strategy</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span><span className="font-medium">Phase 1 (First 30%):</span> Up to 1.5 months free</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span><span className="font-medium">Phase 2 (Next 30%):</span> 1 month free</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span><span className="font-medium">Phase 3 (Remaining 40%):</span> 0.5 month free</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span><span className="font-medium">Stabilization:</span> Eliminate concessions except seasonal</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Implementation Milestones</h2>
          
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Pre-Opening Phase</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span><span className="font-medium">Months 1-2:</span> Strategic planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span><span className="font-medium">Months 3-4:</span> Pre-marketing launch</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span><span className="font-medium">Months 5-6:</span> Full marketing activation</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Lease-Up Phase</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span><span className="font-medium">Months 1-3:</span> Initial lease-up</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span><span className="font-medium">Months 4-6:</span> Mid lease-up</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span><span className="font-medium">Months 7-10:</span> Final lease-up</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Stabilization Phase</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span>Post-85% occupancy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span>Shift to retention-focused marketing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span>Implement renewal pricing strategy</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Budget Allocation</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-base font-medium text-gray-900 mb-2">Year 1: Pre-Opening/Lease-Up</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <span>Digital Marketing: 40%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <span>Traditional Marketing: 25%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <span>Events & Experiential: 20%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <span>Collateral & Photography: 15%</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-base font-medium text-gray-900 mb-2">Year 2+: Stabilized Operations</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <span>Digital Marketing: 50%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <span>Resident Events & Retention: 30%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <span>Traditional Marketing: 10%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <span>Collateral & Ongoing Content: 10%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Critical Success Factors</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
            <ol className="space-y-4 text-gray-600 list-decimal pl-5">
              <li>
                <span className="font-medium text-gray-900">Strategic Pricing Implementation</span>
                <p className="mt-1">Balancing premium positioning with market penetration through the recommended tiered pricing strategy and phased concession approach.</p>
              </li>
              <li>
                <span className="font-medium text-gray-900">Distinctive Brand Execution</span>
                <p className="mt-1">Consistently communicating the property's unique value proposition across all marketing channels and resident touchpoints.</p>
              </li>
              <li>
                <span className="font-medium text-gray-900">Targeted Marketing Approach</span>
                <p className="mt-1">Implementing the multi-channel marketing strategy with emphasis on digital, experiential, and broker partnerships to reach ideal resident profiles.</p>
              </li>
              <li>
                <span className="font-medium text-gray-900">Exceptional Resident Experience</span>
                <p className="mt-1">Delivering on the promise of a curated living experience through thoughtful amenities, programming, and service.</p>
              </li>
              <li>
                <span className="font-medium text-gray-900">Agile Strategy Adaptation</span>
                <p className="mt-1">Continuously monitoring performance metrics and competitive landscape to refine approach throughout the lease-up period.</p>
              </li>
            </ol>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Conclusion</h2>
          
          <p className="text-gray-600 mb-4">
            With thoughtful execution of these recommendations, 220 N. Ada Street is poised for success in the competitive Fulton Market luxury residential market. The property enters the market at a time when the Chicago multifamily sector remains fundamentally strong, particularly in the luxury segment and in prime locations like Fulton Market.
          </p>
          
          <p className="text-gray-600 mb-4">
            By positioning the property in the Premium Luxury Tier with a distinctive brand identity focused on authentic neighborhood connection and curated living experiences, 220 N. Ada Street can effectively compete in this dynamic market. The recommended pricing strategy balances competitive positioning with revenue optimization, while the tiered concession approach will drive leasing velocity during the initial lease-up period.
          </p>
          
          <p className="text-gray-600">
            The marketing strategy outlined in this presentation provides a comprehensive roadmap for successful lease-up and long-term performance, targeting ideal resident profiles through a multi-channel approach. With regular monitoring of key performance indicators and the flexibility to adapt to market conditions, 220 N. Ada Street will be well-positioned to establish itself as a premier residential option in one of Chicago's most vibrant neighborhoods.
          </p>
        </section>
      </div>
    </Layout>
  );
}
