// components/ShowList.js
import axios from 'axios';
import React, { useState, useEffect } from 'react';

import { Link, Navigate, useNavigate } from 'react-router-dom';
import ShowCard from '../components/ShowCard';

const ShowList = () => {
  const [shows, setShows] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        const movies = await response.data
        setShows(movies);
        console.log(movies);
      } catch (error) {
        console.error('Error fetching shows:', error);
      }
    };

    fetchShows();
  }, []);

  

  return (
    <div className='container-lg mt-5 mb-5'>
      <h2>Shows</h2>
      <div className='mt-5 d-flex flex-wrap'>
        {shows?.map(({ show }) => (
            <ShowCard
              key={show?.id} 
              src={show?.image?.medium} 
              name={show?.name} 
              rating={show?.rating.average}
              id={show?.id}
            />
        ))}
      </div>
    </div>
  );
};

export default ShowList;
