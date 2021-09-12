import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//? import pages/component based on folder
import Header from './Pages/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Support from './Pages/Support'
import GameDetail from './Pages/GameDetail'
import Footer from './Pages/Footer'
import Error from './Pages/Error'
//? import common components

function App() {
  return (
    <div>
      <div>
        <h1>iAHwidhawidhwaih</h1>
      </div>
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
          <Route path='/GameDetail/:id'>
            <GameDetail />
          </Route>
          <Route path='*'>
            <Error />
          </Route>

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
