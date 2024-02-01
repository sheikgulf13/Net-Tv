import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ShowList from './pages/ShowList';
import ShowDetails from './pages/ShowDetails';
import BookingForm from './pages/BookingForm';
import Layout from './Layout';


const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Layout> <ShowList /> </Layout>} />
          <Route path="/show/:id" element={<Layout> <ShowDetails /> </Layout>} />
          <Route path="/book/:id" element={<Layout> <BookingForm /> </Layout>} />
        </Routes>
    </Router>
  );
};

export default App;

