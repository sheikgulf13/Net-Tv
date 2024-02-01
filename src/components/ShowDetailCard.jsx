import React from 'react'

const ShowDetailCard = ({ src, name, genre, language, summary, rating, runtime, schedule, id }) => {
  return (
    <div className='mt-5 card p-4 bg-light-subtle border-0 shadow'>
        <h3 className='card-title'>{name}</h3>
        <img src={src}  className='w-25'/>
        <h6 className='pt-2'>Language: <span className='text-secondary'>{language}</span></h6>
        <p>
            {runtime}m | {genre.toString().replace(/,/g, ', ')}
        </p>
        <p>{schedule}</p>
        <p dangerouslySetInnerHTML={{__html: summary}} className='text-secondayr-emphasis'></p>
        <p>rating: {rating ? rating : 0}/10</p>
        <a href={`/book/${id}`} className='btn btn-primary w-25'>Book Tickets</a>
    </div>
  )
}

export default ShowDetailCard