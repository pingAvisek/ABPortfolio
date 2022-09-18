import "./Footer.css";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer>
            <div className="container footer">
                <div className="social-media">
                    <a href="https://facebook.com/pingAvisek" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://github.com/pingAvisek" target="_blank"><i className="fa-brands fa-github"></i></a>
                    <a href="https://instagram.com/pingAvisek" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://twitter.com/pingAvisek" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                    <a href="https://t.me/pingAvisek" target="_blank"><i className="fa-brands fa-telegram"></i>
                    </a>
                    <a href="https://www.tiktok.com/@pingavisek" target="_blank"><i className="fa-brands fa-tiktok"></i></a>
                </div>
                <div className="all-right-reserved">
                    <p>
                        &copy; 2018 - {year} &#183; All Rights Reserved &#183; @pingAvisek
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;