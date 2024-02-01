import React from 'react'

const ShowCard = ({ className, src, name, genre, language, summary, id, rating }) => {
  return (
    <div className='card border-0 shadow m-4'>
        <img src={src} className='card-img-top' />
        <p className='px-2 pt-2'>rating: {rating ? rating : 0}/10</p>
        <h3 className='px-2 card-title'>{name}</h3>
        <div className='px-2 pt-4 pb-2'>
            <a href={`/show/${id}`} className='btn btn-primary text-light w-100'>View</a>
        </div>
    
    </div>
  )
}

export default ShowCard