import React from 'react';
import { ReviewCard } from '../../ui/ReviewCard';

export const NewsList = ({ data }) => {
  return (
    <div style={{ display: 'flex' }}>
      {data.map((article, index) => (
        <ReviewCard key={index} {...article} />
      ))}
    </div>
  );
};
