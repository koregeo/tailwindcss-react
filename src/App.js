import React, { useState, useEffect } from 'react'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Pages';
import { Switch, Route } from 'react-router-dom'
import About from './Pages/about';
import Menu from './Pages/menu';
import Dropdown from './Components/Dropdown';

function App() {
  /* Dropdown Menu feature-above this line */
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  useEffect(() => { // <-- hide dropdown menu when screen > 768 & dropdown menu is open
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', hideMenu)
    return () => {
      window.removeEventListener('resize', hideMenu)
    }
  })
  /* Dropdown Menu feature-above this line */


  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/about" exact component={About} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
