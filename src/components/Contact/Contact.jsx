import React, { useRef } from 'react';
import './Contact.scss';
import { BsLinkedin } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_20n45eu', 'template_ukbh1ce', form.current, 'j2ElvZO7d2mkfGYKl')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Friend me on LinkedIn</h5>
            <a href="https://www.linkedin.com/in/gergo-almasi/"
              target="_blank"
              rel="noreferrer"
            >Send a message</a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" id="name" placeholder="Your Full Name" required />
          <input type="email" name="email" id="email" placeholder="Your Email" required />
          <input type="text" name="subject" id="subject" placeholder="Subject" required />
          <textarea
            name="message"
            id="message"
            rows="7"
            placeholder="Your Message"
            maxLength={1000}
            required>
          </textarea>
          <button type="submit" className="btn btn-primary" >Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;