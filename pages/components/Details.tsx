

export default function Details() {
  return (
    <section className="details" id="details">
        <div className="details--pic">
        <picture>
            <source srcSet="img/familyPic.jpg" type="image/webp"/>
            <img src="img/familyPic.jpg" alt="Matt, his wife, Krista, and their two dogs" />
        </picture>
           
        </div>
        <div className="details--text">
            <div>
                <h3 className="details__title">What I Want from Work</h3>
                <p className="details__body">{`I'm looking for a job that will 
                push me to continue growing quickly. I want be responsible for my own work 
                product, and I want to collaborate. I want to be molded into a pro,
                and I want be better tomorrow than I am today. It's what I've loved
                about my "unemployed" summer, and it seems like TRBL could be a great fit!`}</p>
            </div>
            <div>
                <h3 className="details__title">{`Project I'm Most Proud of`}</h3>
                <p className="details__body">{`I was tasked with making a React based scheduling
                system, but it had to be hosted on Google App Scripts and use a Google Sheet as a
                database. It's not the way I would choose to build it, but to make it HIPAA compliant
                it had to be done that way. While it works, and looks good, the performance is slow
                because of Sheets and App Script. I'm excited to fix that once they get a relational
                database set up.`}</p>
            </div>
            <div>
                <h3 className="details__title">Influences</h3>
                <p className="details__body">{`Lately, I've been following Twitch streamer and youtuber `}
                <a className="details__link" href="https://www.youtube.com/c/TheoBrowne1017">Theo Browne</a>{` as an 
                example of someone to strive toward emulating. In my personal projects
                my next goal is to learn all of the tech included in the `}<a className="skills__link" href="https://www.npmjs.com/package/create-t3-app">{`t3-stack`}</a>.
                {`Including digging into Next.js, Prisma and tRPC.`}</p>
            </div>
        </div>       
        </section>
  )
}
