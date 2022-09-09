import Image from "next/image"

export default function About() {
  return (
    <section className="about-me" id="about">

        <h2 className="section__title section__title--about">Who I am</h2>
        <p className="section__subtitle section__subtitle--about">Developer based out of <br/>Grand Rapids, MI</p>

        <div className="about-me__body">
            <p>{`Hi TRBL! Welcome to my first attempt at Next.js and while there 
              are differences to figure out, it wasn't much of a struggle to get the build working.`}
              <a href="https://github.com/mgehrls/nextJsResume" target={"_blank"} rel="noreferrer">{`Here's the new repository`}</a>{`.`}</p>
            <p>{`Quick about me: I started learning to code in December 2021. 
              In May 2022, I quit my salary real estate job to learn 
              coding full time. After completing the coding lessons in `}
              <a href="https://scrimba.com/learn/frontend" target={"_blank"} rel="noreferrer" >
                 Scrimba's Frontend Developer Career Path</a>{`. I started working
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
