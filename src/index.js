import React from "react"
import ReactDOM from "react-dom"
import Hello from "./Hello"
import Header from "./Header"
import Footer from "./Footer"
import { BrowserRouter,Switch, Route  } from 'react-router-dom'
import Projects from "./Projects"
import About from "./About"
import Jobexperience from "./Jobexperience"
import Education from "./Education"


const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Hello}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/projects' component={Projects}></Route>
        <Route exact path='/Jobexperience' component={Jobexperience}></Route>
        <Route exact path='/Education' component={Education}></Route>
      </Switch>
      <Footer />
    </ >
   )}
   ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('app'));