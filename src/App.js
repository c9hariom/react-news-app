import React, {Component} from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import {BrowserRouter as Router,
        Routes,
        Route} from 'react-router-dom';
import About from "./components/About";
import ContactUs from "./components/ContactUs";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar/>
          <Routes>
            <Route path="/" element={<News country='in' key="1" category='general'/>}></Route>
            <Route path="/business" element={<News country='in' key="2" category='business'/>}></Route>
            <Route path="/entertainment" element={<News country='in' key="3" category='entertainment'/>}></Route>
            <Route path="/general" element={<News country='in' key="4" category='general'/>}></Route>
            <Route path="/health" element={<News country='in' key="5" category='health'/>}></Route>
            <Route path="/science" element={<News country='in' key="6" category='science'/>}></Route>
            <Route path="/sports" element={<News country='in' key="7" category='sports'/>}></Route>
            <Route path="/technology" element={<News country='in' key="8" category='technology'/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<ContactUs/>}></Route>
          </Routes>   
        </Router>
      </div>
    )
  }
  }
