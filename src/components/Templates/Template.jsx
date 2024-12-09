import React from 'react';
import './Template.scss';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import AboutUs from '../AboutUs/AboutUs';
import Special from '../Special/Special';
import Saying from '../Saying/Saying';
import Socials from '../Socials/Socials';
import Footer from '../Footer/Footer';

export default function Template() {
  return (
    <div className='templateContainer'>
      <header>
        <Header/>
      </header>

      <main>
        <section>
          <Hero/>
        </section>

        <section>
          <AboutUs/>
        </section>

        <section>
          <Special/>
        </section>

        <section>
          <Saying/>
        </section>

        <section>
          <Socials/>
        </section>
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  )
}
