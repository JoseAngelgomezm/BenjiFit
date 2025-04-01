import Head from "next/head";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Plans from "./components/Plans";
import Nav from "./components/NavBar";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Entrenador Personal - Benji Gómez</title>
        <meta
          name="description"
          content="Transformación física y mental con Benji Gómez"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Nav />
      {/* Hero Section */}
      <Hero />

      {/* Plans Section */}
      <Plans />

      {/* Testimonials Section */}
      <Testimonials />

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />
    </>
  );
};

export default HomePage;
