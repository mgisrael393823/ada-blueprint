import Layout from '@/components/layout/Layout';
import GatedContent from '@/components/GatedContent';

export default function StrategicOpportunitiesPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
          Strategic Opportunities
        </h1>
        
        <GatedContent 
          title="Strategic Opportunities" 
          teaser="Discover how 220 N. Ada Street plans to redefine Fulton Market living with a focus on authentic neighborhood connection, curated living experiences, and sophisticated urban retreat positioning."
        >
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Brand Positioning</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Recommended Brand Identity</h3>
              <p className="text-gray-600 mb-4">
                Position 220 N. Ada Street as a <strong>boutique luxury residence</strong> with the following brand pillars:
              </p>
              <ol className="space-y-3 text-gray-600 list-decimal pl-5">
                <li>
                  <span className="font-medium">Authentic Fulton Market Connection:</span> Emphasize the property's integration with the neighborhood's industrial heritage and culinary innovation
                </li>
                <li>
                  <span className="font-medium">Curated Living Experience:</span> Focus on thoughtfully designed spaces and personalized resident services
                </li>
                <li>
                  <span className="font-medium">Sophisticated Urban Retreat:</span> Position as an escape from the urban bustle while remaining connected to the energy of the neighborhood
                </li>
              </ol>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Competitive Differentiation</h3>
              <p className="text-gray-600 mb-4">
                Based on competitor analysis, differentiate 220 N. Ada Street through:
              </p>
              <ol className="space-y-3 text-gray-600 list-decimal pl-5">
                <li>
                  <span className="font-medium">Neighborhood Authenticity:</span> While competitors like The Row and 369 Grand emphasize luxury in isolation, position 220 N. Ada as authentically connected to Fulton Market's character
                </li>
                <li>
                  <span className="font-medium">Intimate Community:</span> Contrast with larger competitors by emphasizing a more exclusive, boutique atmosphere
                </li>
                <li>
                  <span className="font-medium">Culinary Connection:</span> Leverage proximity to renowned restaurants to create a unique "foodie" positioning that competitors lack
                </li>
                <li>
                  <span className="font-medium">Design Distinction:</span> Develop a distinctive design aesthetic that contrasts with the more corporate luxury of competitors like Cassidy on Canal and Parq Fulton
                </li>
              </ol>
            </div>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Target Audience Segments</h2>
            
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
                <h3 className="text-lg font-medium text-gray-900 mb-3">Tertiary Target: High-Earning Young Professionals (28-34)</h3>
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
        </GatedContent>
      </div>
    </Layout>
  );
}
