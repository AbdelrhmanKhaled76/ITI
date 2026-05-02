import { Component } from 'react'
import './App.css'
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import News from '../components/news/News';
import Carousel from '../components/carousel/Carousel';

class App extends Component {
  render() {
    return (
      <>
        <div className="main-layout">
          <Header />
          <main className="content-area">
            <News />
            <Carousel />
          </main>
          <Footer />
        </div>
      </>
    )
  }
}

export default App
