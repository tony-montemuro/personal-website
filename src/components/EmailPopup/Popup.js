import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

import "./popup.css"
import XButton from "../../img/x.png"

// takes two props (trigger and setTrigger) and creates an email fourm, where users can send
// me emails
function Popup(props) {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_zceanbe',
        'template_qeyiw0y',
        formRef.current,
        'w-CJKosHSbU9E5vp5'
      )
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  }
  return (props.trigger) ? (
    <div className="popup-email">
        <div className="popup-inner-email">
          <button className="close-email" onClick={() => props.setTrigger(false)}>
            <img src={XButton} alt="" className="x-img"/>
          </button>
          <h2>Send me an email! 📧</h2>
          <p>
            I don't really have any social media, but I do check
            my email.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name"/>
            <input type="text" placeholder="Subject" name="user_subject"/>
            <input type="text" placeholder="Email" name="user_email"/>
            <textarea rows="5" placeholder="Message" name="message"/>
            <button className="submit-btn">Send</button>
            {done && <p className="sent-txt">Email sent! Thank you. 😀</p>}
          </form>
        </div>
    </div>
  ) : "";
}

export default Popup