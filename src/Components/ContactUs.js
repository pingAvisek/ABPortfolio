import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactUs.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const ContactUs = () => {
    const handleSubmit = (e) => {
        // console.log(e)
        setUsername('')
        setUseremail('')
        setMessage('')
    }

    const [username, setUsername] = useState('')
    const [useremail, setUseremail] = useState('')
    const [message, setMessage] = useState('')

    const [submitted, setSubmitted] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        handleSubmit(e);
        setSubmitted(true)
        emailjs.sendForm('service_v6lhs8t', 'template_2h7z73t', form.current, 'GdHujjPcs0elxZtC4')
            .then((result) => {
                setTimeout(() => {
                    setSubmitted(false)
                    notifySuccess()
                }, 2000)
            }, (error) => {
                setTimeout(() => {
                    setSubmitted(false)
                    notifyError()
                }, 2000)
            });
    };

    const notifySuccess = () => {
        toast.success(`Hi ${username}, Thank you for your message.`, {
            theme: "dark",
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
    const notifyError = () => {
        toast.error(`Hi ${username}, Error sending message.`, {
            theme: "dark",
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    return (
        <div className="contact-me container" id="contact">
            <h2>
                Contact Me
            </h2>
            <p>
                If you have any questions, please don't <span id="banner-text-secondary">hesitate</span> to contact me.
            </p>
            <form ref={form} onSubmit={sendEmail}>
                <label>Your coolname:</label>
                <input
                    type="text"
                    name='user_name'
                    value={username}
                    placeholder='John Doe'
                    onChange={e => setUsername(e.target.value)}
                    required
                    minLength={5}
                    style={{ textTransform: 'uppercase' }}

                />
                <label>Email:</label>
                <input
                    type="email"
                    name='user_email'
                    value={useremail}
                    placeholder='yourcoolname@hotmail.com'
                    onChange={e => setUseremail(e.target.value)}
                    required
                    minLength={5}
                    style={{ textTransform: 'lowercase' }}

                />
                <label>Message:</label>
                <textarea name="message"
                    placeholder='Hi AB, I have seen your portfolio, and I...'
                    rows={5}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    minLength={10}
                    required
                />
                {submitted ? <div className="lds-hourglass"></div> : <input type="submit" value="SUBMIT" className='btn' />}
            </form>
            <ToastContainer />
        </div>
    );
};

export default ContactUs