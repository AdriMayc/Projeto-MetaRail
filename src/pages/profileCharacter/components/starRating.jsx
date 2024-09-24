// StarRating.js
import React from 'react';
import { StarIcon } from '@heroicons/react/20/solid'; 


export const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <StarIcon
          key={star}
          className={`w-4 h-4 ${
            rating >= star ? 'text-yellow-400' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

export const StarRatingMore = ({ rating }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <StarIcon
          key={star}
          className={`w-4 h-4 ${
            rating >= star ? 'text-[#DC1867]' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
};


