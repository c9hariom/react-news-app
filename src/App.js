import React, {Component} from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import {BrowserRouter as Router,
        Routes,
        Route} from 'react-router-dom';
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {

  state = {
    progress:0,
    api_key:process.env.REACT_APP_C9NEWS_API_KEY
  }

  setProgress =(progress)=>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        
        <Router>
          <NavBar/>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            height={3}
          />  
          <Routes>
            <Route path="/" element={<News api_key={this.state.api_key} setProgress={this.setProgress} country='in' key="1" category='general'/>}></Route>
            <Route path="/business" element={<News api_key={this.state.api_key} setProgress={this.setProgress} country='in' key="2" category='business'/>}></Route>
            <Route path="/entertainment" element={<News api_key={this.state.api_key} setProgress={this.setProgress} country='in' key="3" category='entertainment'/>}></Route>
            <Route path="/general" element={<News api_key={this.state.api_key} setProgress={this.setProgress} country='in' key="4" category='general'/>}></Route>
            <Route path="/health" element={<News api_key={this.state.api_key} setProgress={this.setProgress} country='in' key="5" category='health'/>}></Route>
            <Route path="/science" element={<News api_key={this.state.api_key} setProgress={this.setProgress} country='in' key="6" category='science'/>}></Route>
            <Route path="/sports" element={<News api_key={this.state.api_key} setProgress={this.setProgress} country='in' key="7" category='sports'/>}></Route>
            <Route path="/technology" element={<News api_key={this.state.api_key} setProgress={this.setProgress} country='in' key="8" category='technology'/>}></Route>
            <Route path='/about' element={<About setProgress={this.setProgress} />}></Route>
            <Route path='/contact' element={<ContactUs setProgress={this.setProgress} />}></Route>
          </Routes>   
        </Router>
      </div>
    )
  }
  }
