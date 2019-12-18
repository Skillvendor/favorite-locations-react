import React from 'react';
import './App.css';

import CountriesConnected from './containers/countries'
import Users from './components/users'
import Favorites from './containers/favorites'

function App() {

const users = [
  {
      "name": 'Gigel',
  }
]

  return (
    <React.Fragment>
      <CountriesConnected gigdel='fvtfvft'> </CountriesConnected>
      <Users users={users}></Users>
      <Favorites></Favorites>
    </React.Fragment>
  );
}

export default App;
