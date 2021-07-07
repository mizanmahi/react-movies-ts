import React from 'react';

// routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from "./components/Home"
import Movie from './components/Movie';
import NotFound from './components/NotFound';

import { GlobalStyles } from "./globalStyles"

const App: React.FC = () => {
  return (
    <Router>
      <Header />

      <Routes >
        <Route path="/" element={ <Home /> }/>
        <Route path="/:movieId" element={ <Movie /> }/>
        <Route path="/*" element={ <NotFound /> }/>
      </Routes>

      <GlobalStyles />
    </Router>
  );
}

export default App;

// <Route path="/" element={ <Home /> }/> Route is by default exact in v6 but we can change this by providing an * after the path
// useParams hook is used to capture the dynamic url parameter