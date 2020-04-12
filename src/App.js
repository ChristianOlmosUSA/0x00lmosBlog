import React from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
        <Header />            {/* we've moved the header component here because it will appear in every page*/}
        <Hero />
        <Home />

    </div>
  );
}

export default App;
