import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import PhishingBanner from "./components/PhishingBanner";
import PolicyModal from "./components/Modal";
import CardsGroup from "./components/CardsGroup";
import Container from "react-bootstrap/esm/Container";
function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      <NavBar />
      <div style={{ backgroundColor: "black" }}>
        <PhishingBanner />
        <Container>
          <h1
            style={{ color: "white", textAlign: "center", paddingTop: "10px" }}
          >
            Not So Great UX Staking Dapp
          </h1>
        </Container>
        <PolicyModal setShow={setShow} show={show} />
        <CardsGroup />
      </div>
    </>
  );
}

export default App;
