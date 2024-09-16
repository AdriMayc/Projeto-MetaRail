// StarRating.js
import React from 'react';
import { StarIcon } from '@heroicons/react/20/solid'; 


const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <StarIcon
          key={star}
          className={`w-6 h-6 ${
            rating >= star ? 'text-yellow-400' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

export default StarRating;
