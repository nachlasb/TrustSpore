import { Star, StarHalf } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: "xs" | "sm";
}

export default function StarRating({ 
  rating, 
  maxRating = 5,
  size = "sm" 
}: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = Math.floor(maxRating - rating - (hasHalfStar ? 0.5 : 0));

  // Set size based on the size prop
  const iconSize = size === "xs" ? "h-3 w-3" : "h-4 w-4";
  const iconColor = "text-yellow-400";

  return (
    <div className="flex">
      {/* Full stars */}
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star key={`full-${i}`} className={`${iconSize} ${iconColor} fill-current`} />
      ))}
      
      {/* Half star if needed */}
      {hasHalfStar && (
        <StarHalf key="half" className={`${iconSize} ${iconColor}`} />
      )}
      
      {/* Empty stars */}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <Star key={`empty-${i}`} className={`${iconSize} ${iconColor} opacity-40`} />
      ))}
    </div>
  );
}
