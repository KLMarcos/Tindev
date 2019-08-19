import React from 'react';
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  fab, faGithub
} from '@fortawesome/free-brands-svg-icons'

import './App.css';

import Routes from './routes'
import Footer from './components/footer'

library.add(fab, faGithub);

function App() {
  return (
    <div className="app-container">
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
