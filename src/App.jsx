import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login';
import Hero from './components/hero/Hero';
import Book from './components/book/Book';
import Packages from './components/packages/Packages';
import Services from './components/services/Services';
import Gallery from './components/gallery/Gallery';
import Review from './components/review/Review';
import Contact from './components/contact/Contact';
import Brand from './components/brand/Brand';
import Footer from './components/footer/Footer';

const App = () => {
  const [openLogin, setOpenLogin] = useState(false);
  return (
    <div>
      <Navbar setOpenLogin={setOpenLogin} />
      <Login setOpenLogin={setOpenLogin} openLogin={openLogin} />
      <Hero />
      <Book />
      <Packages />
      <Services />
      <Gallery />
      <Review />
      <Contact />
      <Brand />
      <Footer />
    </div>
  );
};

export default App;
