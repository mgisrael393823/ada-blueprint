import Layout from '@/components/layout/Layout';

export default function ExecutiveSummaryPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        {/* OG Image for mobile (and fallback for desktop) */}
        <div className="block md:hidden mb-6">
          <img 
            src="/220ada/220og-image.png" 
            alt="220 ADA - THE BLUEPRINT" 
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
          Executive Summary
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          This comprehensive market research and competitive analysis report provides actionable insights for the lease-up and pre-leasing strategy for 220 N. Ada Street in Chicago's Fulton Market district. The property is positioned to capitalize on the neighborhood's exceptional dining, entertainment, and employment opportunities in one of Chicago's most dynamic and sought-after neighborhoods.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Findings</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium text-gray-900 mb-3">Market Analysis:</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span>Fulton Market has transformed from an industrial meatpacking district to one of Chicago's most desirable residential neighborhoods</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span>Chicago multifamily market maintains healthy occupancy rates averaging 94.2%, with Class A properties achieving 95-96%</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span>Rent growth has moderated to 3.2% year-over-year, with luxury properties in prime locations achieving 4-5%</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span>Nearly 30% of Chicago's development pipeline is concentrated in the West Loop/Fulton Market area</span>
            </li>
          </ul>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium text-gray-900 mb-3">Competitive Landscape:</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span>Ten comparable luxury properties were analyzed across Fulton Market and surrounding areas</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span>Three distinct pricing tiers identified: Ultra-Luxury, Premium Luxury, and Accessible Luxury</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span>Concession offerings range from 0.5 to 1.5 months free on new leases</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span>Price points range from $2,151 to $22,995 across studio to 4-bedroom units</span>
            </li>
          </ul>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium text-gray-900 mb-3">Strategic Recommendations:</h3>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Position 220 N. Ada Street in the Premium Luxury Tier with studios from $2,350-$2,800, one-bedrooms from $3,100-$3,800, and two-bedrooms from $4,200-$5,500</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Implement a tiered concession strategy during lease-up: up to 1.5 months free for early signers, gradually reducing to 0.5 months</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Position as a boutique luxury residence with authentic Fulton Market connection, curated living experience, and sophisticated urban retreat</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Target urban sophisticates (35-45), affluent empty nesters, and high-earning young professionals</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Implement multi-channel marketing approach with emphasis on digital, experiential, and broker partnerships</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
