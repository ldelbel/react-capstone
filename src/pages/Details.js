import React from 'react';
import { useParams } from 'react-router';

const Details = () => {
  const { symbol } = useParams();
  return (
    <div>
      { symbol }
    </div>
  );
};

export default Details;
