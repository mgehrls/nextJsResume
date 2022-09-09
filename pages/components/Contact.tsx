import Link from "next/link"

export default function Contact() {
  return (
    <section id="contact" className="contact">
        <h3>Contact Me:</h3>
        <div className="contact__container">
            <a href="tel:+16165002366"  className="contact__phone contact-grouped">
                <i className="fa-solid fa-phone"/>
                <p className="contact__text">616-500-2366</p>
            </a>
            <a href="https://github.com/mgehrls" className="contact__github contact-grouped">
                <i className="fa-brands fa-github-square"/>
                <p className="contact__text">Github</p>
            </a>
            <a href="mailto:mattgehrls@gmail.com" className="contact__email contact-grouped">
                <i className="fa-solid fa-at" />
                <p className="contact__text">matt.gehrls@gmail.com</p>
            </a>
            <a href="https://www.linkedin.com/in/matt-gehrls-303776237/" className="contact__linkedIn contact-grouped">
                <i className="fa-brands fa-linkedin"/>
                <p className="contact__text">LinkedIn</p>
            </a>
            <a href="mgehrls.github.io/resume" className="contact__website contact-grouped">
                <i className="fa-solid fa-link"/>
                <p className="contact__text">mgehrls.github.io/resume</p>
            </a>
            <a href="https://www.google.com/search?q=grand+rapids+michigan" className="contact__city contact-grouped">
                <i className="fa-solid fa-location-dot"/>
                <p className="contact__text">{`Grand Rapids, MI (open to Remote)`}</p>
            </a>
        </div>
    </section>
  )
}
