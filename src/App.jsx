import React from 'react'
import { useGlobalContext } from './context'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//? import pages/component based on folder
import Header from './Pages/Header'
  import Submenu from './Components/Header/Submenu'
import Home from './Pages/Home'
import Search from './Pages/Search'
import About from './Pages/About'
import Support from './Pages/Support'
import Detail from './Pages/Detail'
import Footer from './Pages/Footer'
import Error from './Pages/Error'
//? Admin page components
import Admin from './Components/Admin'
//? import common components

function App() { //remember there <body> before this div
  const {expandNavLink, closeSubmenu} = useGlobalContext()

  return (
    <>
      <div 
        id='main-container' 
        className={expandNavLink ? 'overlay' : ''}>
        <Router>
          <Header/>
          <Submenu />
          <div className='switchContainer' onMouseOver={closeSubmenu}>
          <Switch>

            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/Search'>
              <Search />
            </Route>
            <Route path='/About'>
              <About />
            </Route>
            <Route path='/Support'>
              <Support />
            </Route>
            <Route path='/Detail/:id'>
              <Detail />{/*//! no idea how to give gameDetail a key here */}
            </Route>

            <Route path='/Admin'>
              <Admin />
            </Route>
            
            <Route exact path='/*'>
              <Error />
            </Route>
            
          </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
