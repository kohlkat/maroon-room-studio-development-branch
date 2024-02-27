import React, { useState } from 'react';
import './App.css';

const images = [
  "https://source.unsplash.com/featured/?musicstudio,1",
  "https://source.unsplash.com/featured/?musicstudio,2",
  "https://source.unsplash.com/featured/?musicstudio,3",
  "https://source.unsplash.com/featured/?musicstudio,4",
  "https://source.unsplash.com/featured/?musicstudio,5",
];

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);

  const scrollToImage = (index) => {
    setActiveIndex(index);
    const carousel = document.querySelector('.carousel');
    const scrollPosition = document.querySelectorAll('.carousel-item')[index].offsetLeft;
    carousel.scrollTo({
      left: scrollPosition,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    const carousel = document.querySelector('.carousel');
    const scrollPosition = carousel.scrollLeft;
    const itemWidth = document.querySelector('.carousel-item').offsetWidth;
    const index = Math.round(scrollPosition / itemWidth);
    setActiveIndex(index);
  };

  return (
    <div className="App">
      <nav className="container-fluid">
        <ul>
          <li><strong>Maroon Room Recording Studio</strong></li>
        </ul>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#" onClick={() => setModalOpen(true)}>Booking</a></li>
          <li><a href="mailto:contact@maroonroomstudio.com">Contact Us</a></li>
        </ul>
      </nav>
      <main className="container">
        <div className="grid">
          <section>
            <hgroup>
              <h2>Welcome to Maroon Room Recording Studio</h2>
              <h3>Your premier music production studio</h3>
            </hgroup>
            <p>At Maroon Room Recording Studio, we provide a state-of-the-art environment for music production, mixing, and mastering. Our studio is equipped with the latest technology to bring your music to life.</p>
            <div className="carousel-container">
              <div className="carousel" onScroll={handleScroll}>
                {images.map((src, index) => (
                  <div className="carousel-item" key={index}>
                    <img src={src} alt={`Studio ${index + 1}`} />
                  </div>
                ))}
              </div>
              <div className="carousel-indicators">
                {images.map((_, index) => (
                  <span
                    key={index}
                    className={`indicator ${index === activeIndex ? 'active' : ''}`}
                    onClick={() => scrollToImage(index)}
                  ></span>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setModalOpen(false)}>&times;</span>
            <h2>Select a Date for Your Session</h2>
            <input type="date" />
            <button onClick={() => {alert('Date selected'); setModalOpen(false);}}>Confirm</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;