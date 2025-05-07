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
          
          <p className="text-gray-600 mb-6">
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
            <h3 className="text-xl font-medium text-gray-900 mb-3">Ultra-Luxury Tier Properties</h3>
            <p className="text-gray-600 mb-2"><span className="font-medium">Properties:</span> The Row Fulton Market, 369 Grand by Onni</p>
            <p className="text-gray-600 mb-2"><span className="font-medium">Characteristics:</span></p>
            <ul className="space-y-1 text-gray-600 mb-4 list-disc pl-5">
              <li>Highest price points ($3,500+ for studios, $22,000+ for penthouses)</li>
              <li>Premium developer/management brands (Related, Onni)</li>
              <li>Exceptional finishes and extensive amenity packages</li>
              <li>Emphasis on exclusivity and service</li>
              <li>Limited or no concessions even during lease-up</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-900 mb-3">Premium Luxury Tier Properties</h3>
            <p className="text-gray-600 mb-2"><span className="font-medium">Properties:</span> The Elizabeth Chicago, Cassidy on Canal, One Six Six, Arthur on Aberdeen, Parq Fulton</p>
            <p className="text-gray-600 mb-2"><span className="font-medium">Characteristics:</span></p>
            <ul className="space-y-1 text-gray-600 mb-4 list-disc pl-5">
              <li>Mid-to-high price points ($2,300-$3,500 for studios, $4,000-$10,000 for larger units)</li>
              <li>Strong emphasis on design and amenities</li>
              <li>Established developers with luxury track record</li>
              <li>Moderate concessions during lease-up (typically 1 month free)</li>
              <li>Marketing focus on lifestyle and neighborhood</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-900 mb-3">Accessible Luxury Tier Properties</h3>
            <p className="text-gray-600 mb-2"><span className="font-medium">Properties:</span> The Dylan Chicago, Fulbrix, Coppia</p>
            <p className="text-gray-600 mb-2"><span className="font-medium">Characteristics:</span></p>
            <ul className="space-y-1 text-gray-600 mb-4 list-disc pl-5">
              <li>More attainable price points ($2,200-$2,800 for studios, $3,500-$5,000 for larger units)</li>
              <li>Quality finishes but less extensive amenity packages</li>
              <li>More aggressive concessions during lease-up (1-1.5 months free)</li>
              <li>Marketing focus on value and neighborhood access</li>
            </ul>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Amenity Comparison</h2>
          
          <p className="text-gray-600 mb-4">
            The competitive set offers varying amenity packages, with certain features becoming standard across the luxury segment:
          </p>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-900 mb-3">Universal Amenities</h3>
            <p className="text-gray-600 mb-2">Features present in all or nearly all competitive properties:</p>
            <ul className="space-y-1 text-gray-600 mb-4 list-disc pl-5">
              <li>Fitness centers with cardio and strength equipment</li>
              <li>Resident lounges/club rooms</li>
              <li>Co-working spaces</li>
              <li>Package receiving systems</li>
              <li>Pet-friendly policies</li>
              <li>Outdoor spaces (varying in size and features)</li>
              <li>In-unit laundry</li>
              <li>Smart home technology</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-900 mb-3">Differentiating Amenities</h3>
            <p className="text-gray-600 mb-2">Features that vary significantly across the competitive set:</p>
            <ul className="space-y-1 text-gray-600 mb-4 list-disc pl-5">
              <li>Pools: Present in 7 of 10 properties, with The Row, 369 Grand, and Parq Fulton offering the most impressive pool decks</li>
              <li>Spa Facilities: Only 3 properties offer dedicated spa amenities beyond fitness centers</li>
              <li>Private Dining/Demonstration Kitchens: Present in 5 properties</li>
              <li>Elevated Pet Amenities: 6 properties offer pet spas or dedicated pet runs</li>
              <li>Wellness Centers: 4 properties feature dedicated wellness spaces beyond traditional fitness centers</li>
              <li>Concierge Services: Full-service concierge available in only 3 properties (The Row, 369 Grand, The Elizabeth)</li>
            </ul>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pricing Analysis</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Studio Units</h3>
              <ul className="space-y-1 text-gray-600 list-disc pl-5">
                <li>Price Range: $2,151 (369 Grand) to $3,565 (The Row)</li>
                <li>Average Starting Price: $2,430</li>
                <li>Square Footage Range: 415-589 sq ft</li>
                <li>Price Per Square Foot: $4.30-$6.05</li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-xl font-medium text-gray-900 mb-3">One-Bedroom Units</h3>
              <ul className="space-y-1 text-gray-600 list-disc pl-5">
                <li>Price Range: $2,606 (Parq Fulton) to $4,975 (The Row)</li>
                <li>Average Starting Price: $3,220</li>
                <li>Square Footage Range: 542-780 sq ft</li>
                <li>Price Per Square Foot: $4.15-$5.80</li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Two-Bedroom Units</h3>
              <ul className="space-y-1 text-gray-600 list-disc pl-5">
                <li>Price Range: $3,207 (Parq Fulton) to $10,714 (Parq Fulton Penthouse)</li>
                <li>Average Starting Price: $4,800</li>
                <li>Square Footage Range: 780-1,474 sq ft</li>
                <li>Price Per Square Foot: $3.95-$5.50</li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Three+ Bedroom Units</h3>
              <ul className="space-y-1 text-gray-600 list-disc pl-5">
                <li>Price Range: $6,000 (Parq Fulton) to $22,995 (The Row)</li>
                <li>Average Starting Price: $9,500</li>
                <li>Square Footage Range: 1,200-1,988 sq ft</li>
                <li>Price Per Square Foot: $3.85-$5.25</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Concession Trends</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-900 mb-3">Current Concession Overview</h3>
            <ul className="space-y-1 text-gray-600 mb-4 list-disc pl-5">
              <li>1.5 Months Free: Arthur on Aberdeen</li>
              <li>1 Month Free: Parq Fulton, Coppia, The Elizabeth, Cassidy on Canal, Fulbrix</li>
              <li>Up to 0.5 Month Free + Cash: One Six Six ($500 on select units)</li>
              <li>Look & Lease Special: 369 Grand by Onni</li>
              <li>No Current Promotion: The Row Fulton Market, The Dylan Chicago</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-900 mb-3">Concession Patterns</h3>
            <ul className="space-y-1 text-gray-600 mb-4 list-disc pl-5">
              <li>Newer properties (delivered in past 6 months) offering more aggressive concessions</li>
              <li>Properties approaching stabilization reducing or eliminating concessions</li>
              <li>Larger units typically carrying deeper concessions</li>
              <li>Seasonal variation with more aggressive offers during slower leasing periods (Nov-Feb)</li>
              <li>Concession burn-off strategies varying by property and management company</li>
            </ul>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Marketing Approach Analysis</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-900 mb-3">Brand Positioning</h3>
            <p className="text-gray-600 mb-2">The competitive set employs varying brand positioning strategies:</p>
            <ul className="space-y-1 text-gray-600 mb-4 list-disc pl-5">
              <li>Luxury Lifestyle Focus: The Row, 369 Grand, The Elizabeth</li>
              <li>Neighborhood Integration: The Dylan, Fulbrix, One Six Six</li>
              <li>Design-Forward: Coppia, Arthur on Aberdeen</li>
              <li>Value-Oriented Luxury: Cassidy on Canal, Parq Fulton</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-900 mb-3">Digital Marketing Presence</h3>
            <ul className="space-y-1 text-gray-600 mb-4 list-disc pl-5">
              <li>All properties maintain dedicated websites with virtual tours</li>
              <li>8 of 10 properties actively maintain Instagram accounts</li>
              <li>6 of 10 properties employ chatbots for lead generation</li>
              <li>All properties list on major ILS platforms (Apartments.com, Zillow, etc.)</li>
              <li>7 of 10 properties use paid search advertising</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-900 mb-3">Target Demographic Focus</h3>
            <p className="text-gray-600 mb-2">Marketing materials and amenity programming reveal target demographic priorities:</p>
            <ul className="space-y-1 text-gray-600 mb-4 list-disc pl-5">
              <li>Young Professionals: Primary target for all properties</li>
              <li>DINK Households: Primary target for premium and ultra-luxury tiers</li>
              <li>Empty Nesters: Secondary target for ultra-luxury tier</li>
              <li>Pet Owners: Emphasized by all properties</li>
              <li>Remote Workers: Increasingly emphasized in newer properties</li>
            </ul>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Recommended Price Positioning for 220 N. Ada Street</h2>
          
          <p className="text-gray-600 mb-4">
            Based on the comprehensive analysis of the competitive landscape, 220 N. Ada Street should be positioned in the Premium Luxury Tier with the following specific pricing strategy:
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
      </div>
    </Layout>
  );
}