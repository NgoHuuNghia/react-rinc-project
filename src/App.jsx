import React from 'react'
import { useGlobalContext } from './context'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//? import pages/component based on folder
import Header from './Pages/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Support from './Pages/Support'
import Detail from './Pages/Detail'
import Footer from './Pages/Footer'
import Error from './Pages/Error'
//? import common components

function App() { //remember there <body> before this div

  return (
    <>
      <Router>
        <Header />
        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/About'>
            <About />
          </Route>
          <Route path='/Support'>
            <Support />
          </Route>
          <Route path='/Detail/:id'>
            <Detail />
          </Route>
          <Route path='*'>
            <Error />
          </Route>

        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
