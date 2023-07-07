import React from 'react';
import './Portfolio.scss';
import { portfolioData } from './portfolioData';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolioData.map(({ id, image, title, details, github, demo }) => (
          <article className="portfolio__item" key={"portfolio" + id}>

            <div className="portfolio__item-image" key={"portfolioimgdiv" + id}>
              <img src={image}
                alt={title}
                key={"portfolioimg" + id} />
            </div>
            <h3 key={"h3" + id}>{title}</h3>
            <p key={"p" + id}>{details}</p>
            <div className="portfolio__item-cta" key={"portfoliocta" + id}>
              <a href={github}
                className="btn"
                target="_blank"
                rel="noreferrer"
                key={"portfoliogithub" + id}
              >
                Github
              </a>
              <a href={demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
                key={"portfoliodemo" + id}
              >
                Live Demo
              </a>
            </div>

          </article>
        ))}

      </div>
    </section>
  );
}

export default Portfolio;