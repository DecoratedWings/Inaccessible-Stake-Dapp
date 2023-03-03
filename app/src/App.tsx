import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import PhishingBanner from './components/PhishingBanner';
import policy from './components/FakePolicy';
import PolicyModal from './components/Modal';
import CardsGroup from './components/CardsGroup';
function App() {
  const [show, setShow] = useState(true);

  return (
    <>
    <NavBar/>
    <PhishingBanner/>
    <PolicyModal setShow={setShow} show={show}/>
    <CardsGroup/>
    </>
  );
}

export default App;
