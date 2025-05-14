import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import StarRating from "@/components/ui/star-rating";
import { mushroomCollectionImage, blueOysterImage, lionsManeImage, reishiImage } from "@/lib/images";

const listings = [
  {
    id: 1,
    image: blueOysterImage,
    name: "Blue Oyster",
    scientificName: "Pleurotus ostreatus",
    verified: true,
    generation: "Gen 3",
    added: "2 days ago",
    trustScore: 4.5,
    scorePercentage: 90,
    seller: {
      initials: "JD",
      name: "JohnDoe",
      avatarColor: "bg-accent-dark"
    }
  },
  {
    id: 2,
    image: lionsManeImage,
    name: "Lion's Mane",
    scientificName: "Hericium erinaceus",
    verified: true,
    generation: "Gen 2",
    added: "5 days ago",
    trustScore: 5.0,
    scorePercentage: 100,
    seller: {
      initials: "SG",
      name: "SporeGuru",
      avatarColor: "bg-primary-light"
    }
  },
  {
    id: 3,
    image: reishiImage,
    name: "Reishi",
    scientificName: "Ganoderma lucidum",
    verified: false,
    generation: "Gen 1",
    added: "1 week ago",
    trustScore: 3.5,
    scorePercentage: 70,
    seller: {
      initials: "MW",
      name: "MushroomWizard",
      avatarColor: "bg-accent"
    }
  }
];

export default function MarketplacePreview() {
  return (
    <section id="marketplace" className="py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Spore Exchange Marketplace</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Browse, search and exchange verified spores with trusted growers in our community-driven marketplace.
          </p>
        </div>

        {/* Marketplace Controls */}
        <div className="mb-10 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <input 
                type="text" 
                placeholder="Search for varieties, sellers or genetics..." 
                className="block w-full pl-10 pr-3 py-3 border border-neutral-dark rounded-lg focus:ring-accent focus:border-accent bg-primary text-foreground"
              />
            </div>
          </div>
          <div>
            <select className="block w-full py-3 px-3 border border-neutral-dark rounded-lg focus:ring-accent focus:border-accent bg-primary text-foreground appearance-none" defaultValue="">
              <option value="" disabled>Filter by status</option>
              <option value="verified">Verified Only</option>
              <option value="nonverified">All Listings</option>
              <option value="new">Newly Added</option>
            </select>
          </div>
          <div>
            <select className="block w-full py-3 px-3 border border-neutral-dark rounded-lg focus:ring-accent focus:border-accent bg-primary text-foreground appearance-none" defaultValue="">
              <option value="" disabled>Sort by</option>
              <option value="trust">Highest Trust Score</option>
              <option value="recent">Recently Added</option>
              <option value="variety">Variety Name</option>
            </select>
          </div>
        </div>

        {/* Marketplace Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <div 
              key={listing.id} 
              className="bg-primary rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <img 
                src={listing.image} 
                alt={`${listing.name} mushrooms`}
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-xl mb-1">{listing.name}</h3>
                    <p className="text-muted-foreground text-sm">{listing.scientificName}</p>
                  </div>
                  <span className={`${listing.verified ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'} text-xs px-2 py-1 rounded-full`}>
                    {listing.verified ? 'Verified' : 'Standard'}
                  </span>
                </div>
                
                <div className="flex justify-between items-center mb-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Generation:</span>
                    <span className="font-medium ml-1">{listing.generation}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Added:</span>
                    <span className="font-medium ml-1">{listing.added}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center mb-1">
                    <span className="text-sm text-muted-foreground mr-2">Trust Score:</span>
                    <StarRating rating={listing.trustScore} />
                    <span className="ml-2 text-sm font-medium">{listing.trustScore.toFixed(1)}</span>
                  </div>
                  <div className="w-full bg-neutral-dark rounded-full h-2">
                    <div 
                      className={`${listing.verified ? 'bg-accent' : 'bg-yellow-500'} h-2 rounded-full`} 
                      style={{ width: `${listing.scorePercentage}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full ${listing.seller.avatarColor} flex items-center justify-center text-white font-bold text-xs`}>
                      {listing.seller.initials}
                    </div>
                    <span className="ml-2 text-sm font-medium">{listing.seller.name}</span>
                  </div>
                  <Button className="bg-accent hover:bg-accent-light px-4 py-2 rounded-lg text-white text-sm font-medium transition-all h-auto">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white px-6 py-3 rounded-lg font-medium transition-all h-auto">
            Load More Listings
          </Button>
        </div>

        {/* Get Started Banner */}
        <div className="mt-20 bg-gradient-to-r from-primary to-accent-dark rounded-xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block bg-white/10 px-3 py-1 rounded-md mb-2">
                <p className="text-white text-sm">Coming Soon</p>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-heading">Join Our Early Access Program</h3>
              <p className="text-muted-foreground mb-4">
                Submit your spore samples for DNA testing now and be among the first verified 
                growers when our full marketplace launches.
              </p>
              <div className="mb-6 bg-secondary p-4 rounded-lg">
                <form className="flex flex-col gap-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-4 py-2 rounded-lg bg-primary border border-neutral-dark"
                  />
                  <Button className="bg-white hover:bg-gray-200 text-primary px-6 py-3 font-medium">
                    Reserve Your Spot
                  </Button>
                </form>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src={mushroomCollectionImage} 
                alt="Collection of gourmet mushroom varieties" 
                className="rounded-lg shadow-md w-full max-w-md" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
