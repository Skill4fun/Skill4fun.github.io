import React from 'react';
import './Footer.scss';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io';

const Footer = () => {
  return (
    <footer id="footer">
      <a href="http://skill4fun.github.io" className="footer__logo">Gergely Almasi Portfolio</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/gergo-almasi/"
          target="_blank"
          rel="noreferrer"
        ><BsLinkedin /></a>
        <a href="https://github.com/Skill4fun/"
          target="_blank"
          rel="noreferrer"
        ><FaGithub /></a>
        <a href="https://twitter.com/Skill4fun_"
          target="_blank"
          rel="noreferrer"
        ><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Gergely Almasi. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;