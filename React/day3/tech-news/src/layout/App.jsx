import { Component } from 'react'
import styles from './App.module.css'
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Carousel from '../components/carousel/Carousel'
import News from '../components/news/News';

class App extends Component {
  render() {
    return (
      <>
        <div className={styles['main-layout']}>
          <Header />
          <main className={styles['content-area']}>
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
