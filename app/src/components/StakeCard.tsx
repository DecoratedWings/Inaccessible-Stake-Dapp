import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import InfoButton from "./InfoButton";
import axios from "axios";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import SuccessPopup from "./SuccessPopup";

export interface stakeCardProps {
  imgSrc: string;
  title: string;
  info: string;
  detail: string;
  apy: string;
  style: any;
}
function StakeCard(props: stakeCardProps) {
  const [amount, setAmount] = useState("");
  const [show, setShow] = useState(false);

  const sendStakeRequest = async () => {
    const results = await axios.post("/.netlify/functions/walletBackend", {
      method: "stake",
      amount: amount,
    });
    console.log(results.data);
    setShow(true);
  };

  const sendUnstakeRequest = async () => {
    const results = await axios.post("/.netlify/functions/walletBackend", {
      method: "unstake",
      amount: amount,
    });
    console.log(results.data);
    setShow(true);
  };

  return (
    <Card
      className="bg-dark text-white"
      style={{ height: "27rem", width: "20rem", margin: "15px" }}
    >
      <SuccessPopup
        show={show}
        setShow={setShow}
        msg={"Successfully Executed Transaction!"}
      />

      <Card.Img
        variant="top"
        src={props.imgSrc}
        alt="logo"
        style={props.style}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.info}</Card.Text>
        <Container style={{ textAlign: "center" }}>
          <InfoButton detail={props.detail} />
          <h3>APY is: {props.apy}</h3>
        </Container>
        <InputGroup size="sm">
          <Form.Control
            placeholder="amount"
            aria-label="amount"
            onChange={(e) => setAmount(e.target.value)}
          />
          <Button variant="secondary" onClick={() => sendStakeRequest()}>
            Stake
          </Button>{" "}
          &nbsp;
          <Button variant="secondary" onClick={() => sendUnstakeRequest()}>
            Unstake
          </Button>{" "}
        </InputGroup>
      </Card.Body>
    </Card>
  );
}

export default StakeCard;
