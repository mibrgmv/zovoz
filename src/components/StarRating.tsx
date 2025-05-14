export const StarRating = ({ rating }: { rating: number }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
        <div className="flex">
            {[...Array(5)].map((_, i) => (
        <span key={i} className="text-lg">
    {i < fullStars ? "★" : (i === fullStars && hasHalfStar ? "⯪" : "☆")}
    </span>
))}
    <span className="ml-1 text-sm">{rating.toFixed(1)}</span>
        </div>
);
};