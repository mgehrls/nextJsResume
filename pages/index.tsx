import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from "./components/Header";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Employment from "./components/Employment";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Details from "./components/Details";
import Cta from "./components/Cta";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <script src="https://kit.fontawesome.com/344447b639.js" crossOrigin="anonymous"></script>
        <meta name="description" content="Résumé site for frontend web deb Matt Gehrls."/>
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/apple-touch-icon.png" />
      </Head>
      <div className="App">
        <Header />
        <Hero />
        <Contact />
        <Employment />
        <Skills />
        <About/>
        <Details/>
        <Cta/>
        <Footer/>
      </div>
    </>
  )
}

export default Home
