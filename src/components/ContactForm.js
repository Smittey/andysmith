import React, { useState } from 'react';
import axios from 'axios';
import Button from './Button';

const ContactForm = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: 'post',
      url: 'https://formspree.io/meqazrdr',
      data: new FormData(form),
    })
      .then(() => {
        handleServerResponse(true, 'Thanks! I will try to get back to you soon', form);
      })
      .catch((data) => {
        handleServerResponse(false, data.response.data.error, form);
      });
  };

  return (
    <div id="contact-form">
      <form onSubmit={handleOnSubmit}>
        <input id="name" type="name" name="name" placeholder="Name" required />
        <input id="email" type="email" name="email" placeholder="Email" required />
        <textarea id="message" type="text" name="message" placeholder="Message"></textarea>

        <Button
          label="Submit"
          type="submit"
          category="Contact Form"
          action="Send Message"
          onClick={() => {}}
          disabled={serverState.submitting}
        />
        {serverState.status && (
          <p className={!serverState.status.ok ? 'errorMsg' : ''}>
            {serverState.status.msg}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
