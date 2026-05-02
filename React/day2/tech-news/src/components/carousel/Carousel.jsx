import React, { Component } from 'react';
import './Carousel.css';

class Carousel extends Component {
  state = {
    images: [],
    currentImageIndex: 0,
    loading: true,
    error: null
  };

  async componentDidMount() {
    try {
      const response = await fetch("http://localhost:5000/carousel");
      if (!response.ok) throw new Error("Failed to fetch carousel data");
      const data = await response.json();
      this.setState({ images: data, loading: false });
    } catch (error) {
      console.error("Carousel fetch error:", error);
      this.setState({ error: error.message, loading: false });
    }
  }

  handleNextImage = () => {
    const { images } = this.state;
    if (images.length === 0) return;
    this.setState((prevState) => ({
      currentImageIndex: (prevState.currentImageIndex + 1) % prevState.images.length
    }));
  };

  handlePrevImage = () => {
    const { images } = this.state;
    if (images.length === 0) return;
    this.setState((prevState) => ({
      currentImageIndex: (prevState.currentImageIndex - 1 + prevState.images.length) % prevState.images.length
    }));
  };

  handleImageByIndex = (idx) => {
    this.setState({ currentImageIndex: idx });
  }

  render() {
    const { images, currentImageIndex, loading, error } = this.state;

    if (loading) {
      return (
        <div className="carousel-container loading-state">
          <div className="loading-spinner"></div>
          <p>Loading Latest Tech...</p>
        </div>
      );
    }

    if (error) {
      return <div className="carousel-container error-state">Error: {error}</div>;
    }

    if (images.length === 0) {
      return null;
    }

    const currentItem = images[currentImageIndex];

    return (
      <div className="carousel-container">
        <div className="carousel-track">
          {/* Main Slide Area */}
          <div className="carousel-slide active" key={currentItem.id}>
            <img src={currentItem.image} alt={currentItem.title} />
            <div className="carousel-caption">
              <h2>{currentItem.title}</h2>
              <p>{currentItem.description}</p>
              <button className="carousel-btn">Read More</button>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <button className="carousel-control prev" onClick={this.handlePrevImage} aria-label="Previous Slide">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <button className="carousel-control next" onClick={this.handleNextImage} aria-label="Next Slide">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>

        {/* Dynamic Indicators */}
        <div className="carousel-indicators">
          {images.map((_, idx) => (
            <span 
              key={idx}
              className={"indicator " + (currentImageIndex === idx ? "active" : "")} 
              onClick={() => this.handleImageByIndex(idx)}
            ></span>
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
