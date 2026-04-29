import { Component } from 'react'
import './App.css'
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import News from '../components/news/News';

class App extends Component {
  render() {
    return (
      <>
      <div className="main-layout">
        <Header />
        <main className="content-area">
          <News />
        </main>
        <Footer />
      </div>
      </>
    )
  }
}

export default App
