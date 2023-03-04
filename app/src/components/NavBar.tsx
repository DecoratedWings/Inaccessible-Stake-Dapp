import { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import SuccessPopup from "./SuccessPopup";

function CollapsibleExample() {
  const [show, setShow] = useState(false);
  const [wallet, setWallet] = useState(false);

  const connectWallet = () => {
    console.log("Wallet Connected");
    setShow(true);
    setWallet(true);
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Not Great UX Stake DAPP</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features" style={{ fontSize: "12px" }}>
                Features
              </Nav.Link>
              <Nav.Link href="#pricing" style={{ fontSize: "12px" }}>
                Pricing
              </Nav.Link>
              <NavDropdown
                title="Dropdown"
                style={{ fontSize: "12px" }}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Button variant="light" onClick={() => connectWallet()}>
                {wallet ? "0x123456abc123" : "Connect Wallet"}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <SuccessPopup
        show={show}
        setShow={setShow}
        msg={"Success! Your Wallet is connected!"}
      />
    </>
  );
}

export default CollapsibleExample;
