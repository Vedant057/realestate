import { useContext } from "react";
import "./Contacts.scss";
import { AuthContext } from "../../context/AuthContext";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


function AboutPage() {

  const {currentUser} = useContext(AuthContext)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fwmcol9', 'template_fia6q2n', form.current, {
        publicKey: 'YQ9kBx-f8-9VdjG_n',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
   
  const[model, setModel]= useState(false);

  const toggleModel = () => {
    setModel(!model)
  }
  return (
    <div className="contactPage">
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Phone</label>
      <input type="number" name="phone" />
      <label>Message</label>
      <textarea name="message" />
      <button type="submit" value="Send" onClick={toggleModel} >Done</button>
    </form>

    {model &&(
      <div className="model">
      <div className="overlay"></div>
      <div className="model-content">
        <h2>Successfully Done</h2>
        <p>
          Details Recieved On Gmail
        </p>
        <button className='close-model' onClick={toggleModel}>Close</button>
      </div>
    </div>
    )}
      <div className="imgContainer">
        <img src="/bg6.png" alt="" />
      </div>
    </div>
  );
}

export default AboutPage;