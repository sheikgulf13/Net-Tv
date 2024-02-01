// components/ShowDetails.js
import axios from 'axios';
import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ShowDetailCard from '../components/ShowDetailCard';

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        const movies = await response.data;
        
        setShow(movies);
      } catch (error) {
        console.error('Error fetching show details:', error);
      }
    };

    fetchShowDetails();
  }, [id]);

  return (
    <div className='container-lg mt-5 mb-5'>
      <h2>Show Details</h2>
      {show && (
        <ShowDetailCard
          key={show?.id}
          src={show?.image?.original}
          name={show?.name}
          language={show?.language}
          genre={show?.genres}
          runtime={show?.runtime}
          summary={show?.summary}
          rating={show?.rating?.average}
          schedule={show?.schedule?.time + ' ' + show?.schedule?.days}
          id={show?.id}
        />
      )}
    </div>
  );
};

export default ShowDetails;
