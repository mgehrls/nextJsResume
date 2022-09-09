import Image from "next/image"

export default function About() {
  return (
    <section className="about-me" id="about">

        <h2 className="section__title section__title--about">Who I am</h2>
        <p className="section__subtitle section__subtitle--about">Developer based out of <br/>Grand Rapids, MI</p>

        <div className="about-me__body">
            <p>Hi TRBL! You are the first visitors to my résumé website that 
              I finished September 8th. It is still a work in progress, and I plan
              to make it again in Next.JS as soon as I finish this so I can be more prepared to work with you! Check back on Monday
              the 12th to see if I succeeded! Here is the <a href="https://github.com/mgehrls/resume" target={"_blank"} rel="noreferrer">github rep</a>.</p>
            <p className="about-me__body">{`Quick about me: I started learning to code in December 2021. 
              In May 2022, I quit my salary real estate job to learn 
              coding full time. After completing the coding lessons in `}
              <a href="https://scrimba.com/learn/frontend" target={"_blank"} rel="noreferrer" />
                 {`Scrimba's Frontend Developer Career Path</a> I started working
                 for a local ABA Therapy company to make data entry tools for 
                 their staff, and a scheduling system that would interact with billing.`}</p>
        </div>
        <picture className='about__img--container'>
          <source srcSet="img/deck towards.jpg" type="image/webp"/>
          <img className="about__img" src="img/deck towards.jpg" alt="Matt on his back porch with dog named Alfie." />
        </picture>

    </section>
  )
}
