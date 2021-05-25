import React   from 'react'
import Header from './components/function/Header'
import Menu from './components/function/menu'
import Bottom from './components/function/Bottom'
import Tracker from './components/function/Tracker'
import Image from './components/function/Image'
import Main from './components/function/Main'
import About from './components/function/About'
import Contact from './components/function/Contact'
import Register from './components/function/Register'
import Loginform from './components/function/Loginform'
import CryptoTracker from './components/function/CryptoTracker'

import{BrowserRouter , Route , Switch} from 'react-router-dom'


 function App() {

  
  return (
    <BrowserRouter>
    <Header/>
    <Menu />

<Switch >
  <Route exact path="/">
  <Tracker/>
     <Image/>
     <Main/>     
  </Route>

  <Route exact path='/About'>
  <Image/>
  <Tracker/>
   <About/>
  </Route>

  <Route exact path='/Contact'>
  <Image/>
  <Tracker/>
   <Contact/>
  </Route>

  <Route exact path='/Register'>
  <Register/>
  </Route>

  <Route exact path='/Loginform'>
  <Loginform/>
  </Route>

  <Route exact path='/CryptoTracker'>
  <CryptoTracker/>
  </Route>


</Switch>

     <Bottom/>  
    </BrowserRouter>
     
  )
}

export default App;