import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import PhishingBanner from "./components/PhishingBanner";
import PolicyModal from "./components/Modal";
import CardsGroup from "./components/CardsGroup";
import Container from "react-bootstrap/esm/Container";
import policy from './components/FakePolicy';
import Button from "react-bootstrap/esm/Button";
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa';

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
        <PolicyModal title={'Privacy Policy'}setShow={setShow} show={show} content={policy}/>
        <CardsGroup />

        <Container style={{ color: "white", textAlign: "center", paddingTop: "20px", paddingBottom:"20px"}}>
        <Button variant="dark"><FaTwitter/></Button>&nbsp;
        <Button variant="dark"><FaLinkedin/></Button>&nbsp;
        <Button variant="dark"><FaFacebook/></Button>&nbsp;
        <Button variant="dark"><FaInstagram/></Button>&nbsp;
        </Container>
      </div>
    </>
  );
}

export default App;
