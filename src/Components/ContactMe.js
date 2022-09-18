import "./ContactMe.css"

const ContactMe = () => {
    return (
        <div className="contact-me container" id="contact">
            <h2>
                Contact Me
            </h2>
            <p>
                If you have any questions, please don't <span id="banner-text-secondary">hesitate</span> to contact me.
            </p>
            <form action="https://formspree.io/f/mayvravb" method="post">
                <input type="text" name="FullName" id="fullName" placeholder="Enter your Full Name" required
                    autocomplete="off" />
                <input type="email" name="Email" id="email" placeholder="Enter your Email" required autocomplete="off" />
                <input type="text" name="Message" id="message" placeholder="Enter your message" required autocomplete="off" />
                <button type="submit" className="btn" id="submit">
                    Submit
                </button>
            </form >
        </div>

    )
}

export default ContactMe
