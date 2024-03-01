import React from "react";

const Star = ({ fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={fill}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 inline-block"
  >
    <path d="M12 2 L15.09 8.26 L22 9.27 L17 14.14 L18.18 21.02 L12 17.77 L5.82 21.02 L7 14.14 L2 9.27 L8.91 8.26 z" />
  </svg>
);

const StarRating = ({ rating, totalStars, size }) => {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const remainingStars = totalStars - filledStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={`text-yellow-400 ${size}`}>
      {[...Array(filledStars)].map((_, index) => (
        <Star key={index} fill="#FFD700" />
      ))}
      {hasHalfStar && <Star fill="#FFD700" />}
      {[...Array(remainingStars)].map((_, index) => (
        <Star key={index} fill="#CBD5E0" />
      ))}
    </div>
  );
};

// Example usage
const App = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <StarRating rating={3.5} totalStars={5} size="w-12 h-12" />
    </div>
  );
};

export default App;
