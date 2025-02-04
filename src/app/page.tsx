// app/page.tsx
import Head from 'next/head';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Entrenador Personal - Benji Gómez</title>
        <meta name="description" content="Transformación física y mental con Benji Gómez" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <Contact />
    </>
  );
};

export default HomePage;
