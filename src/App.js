import React from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Contact from './containers/Contact';
import Post from './containers/Post';

function App() {
  return (
    <Router>

      <div className="App">
          <Header />            {/* we've moved the header component here because it will appear in every page*/}
          <Hero />
          <Route path="/" exact component={Home} />           {/* forward slash means to load the component, and the route, hence we put 'exact' to stop all the items upstream being loaded too. 15.39*/}
          <Route path="/contact" component={Contact}/>
          <Route path="/post/:postId" component={Post} />
      </div>
    </Router>
   
  );
}

export default App;
