import React, { useRef } from 'react'
import './Join.css'
import emailjs from "@emailjs/browser";

const Join = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_ihf9cwf', 'template_v5f2dgs', form.current, {
            publicKey: '6bkaL_PW67sYnSiMP',
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
    return (
        <div className="Join" id="join-us">
            <div className="left-j">
                <hr />
                <div>
                    <span className='stroke-text'>Are you</span>
                    <span>prepared to</span>
                </div>
                <div>
                    <span>elevate your physique</span>
                    <span className='stroke-text'>with us?</span>
                </div>
            </div>


            <div className="right-j">
                <form className="email-container" ref={form} onSubmit={sendEmail}>
                    <input type="email" name='user_email' placeholder='Provide your email address...'/>
                    <button type='submit' className="btn btn-j">Join us today!</button>
                </form>
            </div>
        </div>
    )
}
export default Join