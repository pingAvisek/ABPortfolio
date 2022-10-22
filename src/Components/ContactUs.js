import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactUs.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const ContactUs = () => {

    const [submitted, setSubmitted] = useState(false)

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_v6lhs8t', 'template_2h7z73t', form.current, 'GdHujjPcs0elxZtC4')
            .then((result) => {
                console.log(result.text);
                setTimeout(() => {
                    e.resetForm()
                    setSubmitted(false)
                }, 2000)
                notifySuccess()
            }, (error) => {
                console.log(error.text);
                notifyError()
            });
    };

    const notifySuccess = () => {
        toast.success('Message Sent!', {
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
        toast.error("Message Couldn't be Sent!", {
            theme: "dark",
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        return (
            <div className="contact-me container" id="contact">
                <h2>
                    Contact Me
                </h2>
                <p>
                    If you have any questions, please don't <span id="banner-text-secondary">hesitate</span> to contact me.
                </p>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="user_name"
                        placeholder='John Doe'
                        required
                        minLength={5}
                    />
                    <label>Email:</label>
                    <input
                        type="email"
                        name="user_email"
                        placeholder='johndoe@hotmail.com'
                        required />
                    <label>Message:</label>
                    <textarea name="message"

                        rows={5}
                        minLength={10}
                        required />

                    {submitted ? <div className="lds-hourglass"></div> : <input type="submit" value="Send" />}
                </form>
                <ToastContainer />
            </div>
        );
    };
}
export default ContactUs