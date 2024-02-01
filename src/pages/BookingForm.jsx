// components/BookingForm.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookingForm = () => {
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

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [formData, setFormData] = useState({
        showName: show?.name,
        schedule: show?.schedule?.time + ' ' + show?.schedule?.days,
        name: '',
        email: '',
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          
          [e.target.name]: e.target.value,
          [e.target.email]: e.target.value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('Bookings', JSON.stringify(formData))
        setFormData({
          showName: show?.name,
          schedule: show?.schedule?.time + ' ' + show?.schedule?.days,
          name: '',
          email: '',
        })
        console.log('Form submitted:', formData);
      };

  return (
    <div className='container-lg mt-5 d-flex justify-content-center align-items-center'>
      <div className='shadow card p-4 border-0'>
        <h2 className='text-center'>Booking Tickets for {show?.name}</h2>
        <div className='d-flex p-3'>
          <img src={show?.image?.medium} className='w-50'/>
          <div className='px-5'>
            <h6 className='pt-4'>Show: <span className='text-secondary'>{show?.name}</span></h6>
            <h6>Language: <span className='text-secondary'>{show?.language}</span></h6>
            <h6>Schedule: <span className='text-secondary'>{show?.schedule?.time + ' ' + show?.schedule?.days }</span></h6>
            {show && (
              <form onSubmit={handleSubmit} className='mt-4'>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
              <input type="text" placeholder='Enter your name' className="form-control " id="name" name="name" value={formData.name} onChange=  {handleChange} />
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" placeholder='Enter your email' className="form-control " id="email" name="email" value={formData.email} onChange= {handleChange} />
              </div>
              <button type="submit" className="btn btn-primary w-100">Submit</button>
             </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
