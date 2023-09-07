import React from 'react';
import './About.scss';
import ME from '../../assets/me-about-small.png';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container ">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>in CI/CD development</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>SCRUM</h5>
              <small>agile methodology</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>fullstack applications</small>
            </article>
          </div>

          <p>
            As a career changer, after 12 years of trade/sales, I headed towards IT, I envision my future in this sector.
            <br />
            Accordingly, I obtained a Frontend and then a Fullstack Developer qualification at the EU-funded intensive programming course of the "GINOP-6.2.8-20 Újratervezés Program".
          </p>
          <p>
            During the Fullstack training, we gained significant experience in CI/CD development (GitHub, JIRA) in a "simulated working environment", in a team of 5 people, where we developed a ticketing application together, following an agile SCRUM methodology.
            <br />
            In the development of my project work "Inventory Browser Application" detailed below, I was mostly immersed in MERN technologies and RESTful API.
            <br />
            I wrote the tests in JEST and the api-documentation using OpenAPI/Swagger.
          </p>
          <p>
            I am currently looking for opportunities as a Frontend and Fullstack developer, primarily using the mentioned stack, but I am also happy to learn new technologies.
            <br /> I am planning to learn e.g.: React Native, Vue, Next, Angular, C#.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;