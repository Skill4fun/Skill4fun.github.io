import './Navbar.scss';
import { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { BiMessageSquareDetail } from 'react-icons/bi';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#');

  const changeClass = (id) => {
    setActiveNav(id);
    setTimeout(() => { setActiveNav('#') }, 1000);
  }

  return (
    <nav>
      <a href="#home"
        className={activeNav === '#home' ? 'active' : ''}
        onClick={() => changeClass('#home')}
      >
        <AiOutlineHome />
      </a>
      <a href="#about"
        className={activeNav === '#about' ? 'active' : ''}
        onClick={() => changeClass('#about')}
      >
        <AiOutlineUser />
      </a>
      <a href="#experience"
        className={activeNav === '#experience' ? 'active' : ''}
        onClick={() => changeClass('#experience')}
      >
        <BiBook />
      </a>
      <a href="#contact"
        className={activeNav === '#contact' ? 'active' : ''}
        onClick={() => changeClass('#contact')}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Navbar;