import Layout from '@/components/layout/Layout';

export default function MarketIntelligencePage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
          Market Intelligence
        </h1>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Chicago Multifamily Market Analysis</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-900 mb-3">Market Overview</h3>
            <p className="text-gray-600 mb-6">
              The Chicago multifamily market continues to demonstrate resilience and adaptability in 2025, despite economic fluctuations and increased supply in certain submarkets. As one of the nation's largest multifamily markets, Chicago offers a diverse range of housing options across its many neighborhoods, with the luxury segment showing particularly strong performance in high-demand areas like Fulton Market, River North, and the West Loop.
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-900 mb-3">Key Market Indicators</h3>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
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
                    <span className="font-medium">Rent Growth:</span> After a period of accelerated growth in 2023-2024, rent increases have moderated to a more sustainable 3.2% year-over-year growth rate across the Chicago market. Luxury properties in prime locations continue to outperform the broader market with 4-5% annual rent growth.
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
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-medium text-gray-900 mb-3">Rent Growth Trends</h3>
            <div className="mb-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4">
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <div className="w-full h-64 bg-gray-100 rounded-lg">
                    <div className="p-4">
                      <h4 className="text-lg font-medium text-gray-900 mb-4 text-center">Chicago Multifamily Rent Growth (YOY)</h4>
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                          <tr>
                            <th className="px-4 py-2 bg-gray-50 text-left text-sm font-medium text-gray-500">Time Period</th>
                            <th className="px-4 py-2 bg-gray-50 text-left text-sm font-medium text-gray-500">Overall Chicago Market</th>
                            <th className="px-4 py-2 bg-gray-50 text-left text-sm font-medium text-gray-500">Luxury Properties in Prime Locations</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">2022</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">5.8%</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">7.2%</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">2023</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">4.5%</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">6.0%</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">2024</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">3.8%</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">5.2%</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">2025 (Current)</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">3.2%</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">4.5%</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">2026 (Forecast)</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">3.0%</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">3.8%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 italic">Note: Based on quarterly market reports and industry forecasts for Chicago MSA.</p>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-medium text-gray-900 mb-3">Current Market Trends</h3>
            <ol className="space-y-3 text-gray-600 list-decimal pl-5">
              <li>
                <span className="font-medium">Amenity Evolution:</span> The post-pandemic emphasis on work-from-home spaces, outdoor areas, and wellness amenities continues to influence property design and renovation. Properties with robust technology infrastructure and flexible common spaces are commanding premium rents.
              </li>
              <li>
                <span className="font-medium">Sustainability Focus:</span> Energy-efficient buildings with green certifications are increasingly attractive to both residents and investors, with LEED-certified properties achieving rent premiums of 3-5% over comparable non-certified buildings.
              </li>
              <li>
                <span className="font-medium">Rightsizing Units:</span> While overall unit sizes have decreased slightly in new construction, developers are allocating space more efficiently with thoughtful storage solutions, flexible layouts, and high-quality finishes to justify premium price points.
              </li>
              <li>
                <span className="font-medium">Technology Integration:</span> Smart home features, building apps, and automated services have become standard expectations rather than premium differentiators in the luxury segment.
              </li>
              <li>
                <span className="font-medium">Service-Oriented Approach:</span> High-end properties are increasingly competing on service offerings, including concierge services, resident events, and personalized experiences to drive resident satisfaction and retention.
              </li>
            </ol>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-medium text-gray-900 mb-3">Market Forecast</h3>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
              <p className="text-gray-600 mb-3">Looking ahead to the remainder of 2025 and into 2026, the Chicago multifamily market is expected to experience:</p>
              <ol className="space-y-3 text-gray-600 list-decimal pl-5">
                <li>
                  <span className="font-medium">Moderated Supply Growth:</span> The pace of new deliveries is projected to slow in late 2025 and 2026 as developers adjust to higher construction costs and financing challenges, potentially creating favorable conditions for properties delivering in the near term.
                </li>
                <li>
                  <span className="font-medium">Stable Rent Growth:</span> Annual rent growth is forecast to continue at 3-4% for well-positioned properties in prime neighborhoods, with potential for stronger performance in supply-constrained submarkets.
                </li>
                <li>
                  <span className="font-medium">Increased Concessions in Select Submarkets:</span> Areas with concentrated new deliveries, including portions of the West Loop and South Loop, may experience periods of elevated concessions during lease-up phases, typically ranging from 1-2 months free on 12-15 month leases.
                </li>
                <li>
                  <span className="font-medium">Continued Flight to Quality:</span> Residents continue to demonstrate willingness to pay premium rents for best-in-class properties with superior locations, finishes, and amenities, creating opportunity for well-positioned new developments.
                </li>
              </ol>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-medium text-gray-900 mb-3">Target Resident Profile</h3>
            <div className="mb-5">
              <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4">
                <h4 className="text-lg font-medium text-gray-900 mb-4">Income Distribution Analysis</h4>
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <div className="w-full h-64 bg-gray-100 rounded-lg">
                    <div className="p-4">
                      <h5 className="text-base font-medium text-gray-900 mb-3 text-center">Household Income Distribution - Target Market for 220 N. Ada</h5>
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                          <tr>
                            <th className="px-4 py-2 bg-gray-50 text-left text-sm font-medium text-gray-500">Income Range</th>
                            <th className="px-4 py-2 bg-gray-50 text-left text-sm font-medium text-gray-500">Percentage of Target Residents</th>
                            <th className="px-4 py-2 bg-gray-50 text-left text-sm font-medium text-gray-500">Primary Unit Type Match</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">$100,000-$125,000</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">8%</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">Studio</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">$125,000-$150,000</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">15%</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">Studio/1-Bedroom</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">$150,000-$200,000</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">32%</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">1-Bedroom</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">$200,000-$250,000</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">23%</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">1-2 Bedroom</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">$250,000-$350,000</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">17%</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">2-3 Bedroom</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">$350,000+</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">5%</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">Penthouse</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 italic">Note: Based on market research of luxury multifamily residents in the Fulton Market district.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">Age Distribution</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span>Primary renter demographic: 28-45 years old</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span>Growing segment: 55+ empty nesters</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span>Primary renters in 35-45 bracket seeking larger units</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span>Younger professionals (28-34) typically seeking studios and 1-bedrooms</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">Household Composition</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span>Single professionals and couples without children: 70-75%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span>Roommate households: 15%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span>Empty nesters: 10-15%</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">Employment Sectors</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span>Technology: 28%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span>Finance: 22%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span>Consulting: 18%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span>Healthcare: 14%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span>Creative industries: 12%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span>Other: 6%</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">Lifestyle Preferences</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span>Experiential living and dining</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span>Cultural activities and entertainment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span>Fitness and wellness focus</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span>Work-life integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span>Willing to pay premium for location, convenience, and quality</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <section className="mb-10 mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Fulton Market District Analysis</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Neighborhood Overview</h3>
              <p className="text-gray-600 mb-4">
                The Fulton Market District, once Chicago's meatpacking and food distribution hub, has undergone a remarkable transformation to become one of the city's most dynamic and sought-after neighborhoods. This evolution from industrial corridor to vibrant mixed-use district represents one of Chicago's most successful urban revitalization stories.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Current Neighborhood Character</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <div>
                        <span className="font-medium">Architectural Diversity:</span> Distinctive blend of converted industrial buildings, historic lofts, and sleek modern towers, creating a visually dynamic urban environment.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <div>
                        <span className="font-medium">Culinary Destination:</span> One of the highest concentrations of acclaimed restaurants in Chicago, including multiple Michelin-starred establishments.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <div>
                        <span className="font-medium">Creative and Tech Hub:</span> Major employers including Google, McDonald's corporate headquarters, and numerous creative agencies have established significant presence.
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <div>
                        <span className="font-medium">Retail Evolution:</span> Evolved from industrial suppliers to a curated mix of boutique retailers, design showrooms, and experiential concepts.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <div>
                        <span className="font-medium">Cultural Amenities:</span> Art galleries, performance venues, and cultural spaces contribute to the neighborhood's vibrant atmosphere and appeal.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <div>
                        <span className="font-medium">Transportation Access:</span> Excellent transportation options, including CTA Green and Pink Line stations, multiple bus routes, and easy access to major highways.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Location and Boundaries</h3>
              <p className="text-gray-600 mb-2">The Fulton Market District in Chicago is located on the Near West Side and is bounded by:</p>
              <ul className="space-y-1 text-gray-600 mb-4">
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>North: Hubbard Street</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>East: Halsted Street</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>South: Randolph Street</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>West: Ogden Avenue</span>
                </li>
              </ul>
              <p className="text-gray-600">
                The district is strategically located just west of Chicago's central business district (The Loop), providing convenient access to downtown while maintaining its distinctive character and identity.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Development Pipeline</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                <p className="text-gray-600 mb-2">As of April 2025, the Fulton Market residential pipeline includes:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span><span className="font-medium">Under Construction:</span> Approximately 1,800 units across 6 developments, scheduled for delivery between Q2 2025 and Q1 2026</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span><span className="font-medium">Recently Completed:</span> Approximately 2,200 units across 8 developments delivered in the past 24 months</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">•</span>
                    <span><span className="font-medium">Planned/Proposed:</span> Approximately 2,500 units across 10 developments in various stages of planning and approval</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-600">
                This development activity represents one of the most active residential pipelines in Chicago, reflecting strong developer confidence in the district's continued appeal and growth potential.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Demand Drivers</h3>
              <ol className="space-y-3 text-gray-600 list-decimal pl-5">
                <li>
                  <span className="font-medium">Employment Concentration:</span> Major companies including McDonald's, Google, Mondelez, and others have established significant presence in the area, creating natural demand for nearby housing options.
                </li>
                <li>
                  <span className="font-medium">Lifestyle Amenities:</span> The district offers an exceptional concentration of lifestyle amenities that appeal to luxury renters, including one of Chicago's premier dining destinations with acclaimed restaurants.
                </li>
                <li>
                  <span className="font-medium">Accessibility and Connectivity:</span> The neighborhood's strategic location offers excellent connectivity with public transit, highway access, and high walkability and bikeability scores.
                </li>
                <li>
                  <span className="font-medium">Target Demographic Alignment:</span> The district's character and amenities align perfectly with the preferences of luxury renters, including young professionals, DINK households, urban empty nesters, and the creative class.
                </li>
              </ol>
            </div>
          </section>
        </section>
      </div>
    </Layout>
  );
}
