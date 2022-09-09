export default function Hero() {
  return (
    <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
            Hi, I am <strong>Matt Gehrls</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">Frontend React Developer</p>
        <picture className="intro__img">
          <source srcSet="img/cropped katies yard2.jpg" type="image/webp"/>
          <img src="img/cropped katies yard2.jpg" alt="Matt Gehrls smiling"/>
        </picture>
    </section>
  )
}
