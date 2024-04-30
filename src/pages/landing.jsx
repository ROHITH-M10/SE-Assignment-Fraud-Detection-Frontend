import React from 'react';
import Faq from './faq.jsx';
import About from './about.jsx';
import Top from './top.jsx';
import Updates from './updates.jsx';
import Footer from './footer.jsx';

const Landing = () => {
  return (
    <div className="landing-body">
      <Top />
      <Updates />
      <About />
      <Faq />
      <Footer />
    </div>
  );
};

export default Landing;
