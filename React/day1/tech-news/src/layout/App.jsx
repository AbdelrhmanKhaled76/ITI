import { Component } from 'react'
import './App.css'
import Card from '../components/card/card'
import Footer from '../components/footer/footer';
import Header from '../components/header/header';

class App extends Component {


  render() {

    return (
      <>
        <Header />
        <Card />
        <Footer />
      </>
    )
  }
}

export default App
