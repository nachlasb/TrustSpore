import StarRating from "@/components/ui/star-rating";

const trustLevels = [
  {
    rating: 5,
    title: "Master Cultivator",
    description: "Multiple verified genetics, 20+ successful exchanges"
  },
  {
    rating: 4,
    title: "Trusted Grower",
    description: "Verified genetics, 10+ successful exchanges"
  },
  {
    rating: 3,
    title: "Established Member",
    description: "Some verified exchanges, good community standing"
  },
  {
    rating: 2,
    title: "New Member",
    description: "Limited history, building reputation"
  }
];

const testimonials = [
  {
    quote: "SporeTrust has completely transformed how I approach mushroom cultivation. The verified genetics give me confidence in what I'm growing, and the community is incredibly supportive.",
    author: "Sarah M.",
    initials: "SM",
    rating: 5,
    avatarBg: "bg-accent-dark"
  },
  {
    quote: "As someone who breeds rare varieties, I needed a way to protect my work. The DNA verification system has been invaluable for maintaining the genetic integrity of my strains.",
    author: "Robert J.",
    initials: "RJ",
    rating: 4.5,
    avatarBg: "bg-primary-light"
  }
];

const communityStats = [
  { label: "Active Members", value: "1,200+", percentage: 80 },
  { label: "Verified Swaps", value: "5,450", percentage: 65 },
  { label: "Verified Varieties", value: "75", percentage: 45 },
  { label: "Countries Represented", value: "32", percentage: 30 }
];

export default function Community() {
  return (
    <section id="community" className="py-16 md:py-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Join Our Growing Community</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Connect with fellow mushroom enthusiasts, share knowledge, and build your trust 
            score through verified exchanges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Community Stats */}
          <div className="bg-secondary rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-6 font-heading">Community Stats</h3>
            <div className="space-y-6">
              {communityStats.map((stat, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-muted-foreground">{stat.label}</span>
                    <span className="font-bold">{stat.value}</span>
                  </div>
                  <div className="w-full bg-neutral-dark rounded-full h-2">
                    <div 
                      className="bg-accent h-2 rounded-full" 
                      style={{ width: `${stat.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Score System */}
          <div className="bg-secondary rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-6 font-heading">Trust Score System</h3>
            <p className="text-muted-foreground mb-6">
              Our community-driven trust system helps you identify reliable growers and high-quality genetics.
            </p>
            
            <div className="space-y-4">
              {trustLevels.map((level, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex mr-3">
                    <StarRating rating={level.rating} />
                  </div>
                  <div>
                    <p className="font-bold">{level.title}</p>
                    <p className="text-xs text-muted-foreground">{level.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="bg-secondary rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-6 font-heading">Member Testimonials</h3>
            
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-primary p-4 rounded-lg">
                  <p className="italic text-muted-foreground mb-4">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full ${testimonial.avatarBg} flex items-center justify-center text-white font-bold text-xs`}>
                      {testimonial.initials}
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-sm">{testimonial.author}</p>
                      <div className="flex mt-1">
                        <StarRating rating={testimonial.rating} size="xs" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
