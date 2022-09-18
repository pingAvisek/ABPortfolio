import "./Services.css"

const Services = () => {
    return (
        <div className="container">
            <h2 className="hero-heading">My Services</h2>
            <div className="services-section" id="services">
                <div className="cards">
                    <h1><i className="fa-solid fa-code"></i></h1>
                    <h2>Frontend Development</h2>
                    <p>I have a strong knowledge of HTML, CSS, and JavaScript. I can create responsive websites for you.</p>
                </div>
                <div className="cards">
                    <h1><i className="fa-solid fa-paintbrush"></i></h1>
                    <h2>Web Design</h2>
                    <p>I am good in web design. I have designed many websites using HTML, CSS which is openly available
                        for all on my <a id="banner-text-secondary" href="https://www.github.com/pingAvisek"
                            style={{
                                textDecoration: "none"
                            }}>GitHub</a>
                        profile.</p>
                </div>
                <div className="cards">
                    <h1><i className="fa-solid fa-laptop"></i></h1>
                    <h2>Responsive Design</h2>
                    <p>
                        I can create responsive websites for you which is responsive to all devices.
                    </p>
                </div>
                <div className="cards">
                    <h1><i className="fa-solid fa-pen"></i></h1>
                    <h2>Content Writer</h2>
                    <p>
                        Besides development and designing I also have a strong knowledge of writing content. I can write
                        content for you.
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Services