import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import EventCarousel from './components/EventCarousel';

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <Footer />
      <EventCarousel />
    </div>
  );
}

export default App;
