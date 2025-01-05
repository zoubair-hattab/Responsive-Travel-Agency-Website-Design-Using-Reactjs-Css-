import React, { useEffect, useState } from 'react';
import './navbar.css';
import { FaSearch, FaUser } from 'react-icons/fa';
import { IoClose, IoMenu } from 'react-icons/io5';

const Navbar = ({ setOpenLogin }) => {
  const navbar = [
    {
      name: 'home',
      path: '#home',
    },
    {
      name: 'book',
      path: '#book',
    },
    {
      name: 'packages',
      path: '#packages',
    },
    {
      name: 'services',
      path: '#services',
    },
    {
      name: 'gallery',
      path: '#gallery',
    },
    {
      name: 'review',
      path: '#review',
    },
    {
      name: 'contact',
      path: '#contact',
    },
  ];
  const [openSearch, setOpenSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setOpenSearch(false);
      setOpenMenu(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header>
      {openMenu ? (
        <IoClose className="menu" onClick={() => setOpenMenu(false)} />
      ) : (
        <IoMenu className="menu" onClick={() => setOpenMenu(true)} />
      )}

      <a href="#" className="logo">
        <span>T</span>ravel
      </a>
      <nav className={`navbar ${openMenu ? ' acitve' : ''}`}>
        {navbar?.map((item, index) => (
          <a key={index} href={item.path} onClick={() => setOpenMenu(false)}>
            {item.name}
          </a>
        ))}
      </nav>
      <div className="icons">
        {openSearch ? (
          <IoClose className="icon" onClick={() => setOpenSearch(false)} />
        ) : (
          <FaSearch className="icon" onClick={() => setOpenSearch(true)} />
        )}

        <FaUser className="icon" onClick={() => setOpenLogin(true)} />
      </div>
      <form
        action=""
        className={`search-bar-container${openSearch ? ' active' : ''}`}
      >
        <input type="search" placeholder="serach" id="search-bar" />
        <label htmlFor="search-bar">
          <FaSearch />
        </label>
      </form>
    </header>
  );
};

export default Navbar;
