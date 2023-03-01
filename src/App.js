import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavBar } from './components/Navbar';
import { Main } from './components/Main';

function App() {
  return (
    <>
      <NavBar color='primary' dark={true} expand={true}/>
      <Main />
    </>
  )
}

export default App;