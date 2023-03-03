import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import StakeCard from "./StakeCard";

function CardsGroup() {
  return (
    <Container>
      <Row xs={3} md={3} style={{paddingTop:'12px'}}>
        <Col xs >
          <StakeCard imgSrc={"eth.jpg"} title={"Ethereum"} info={"Stake Eth"} apy={"2.5"} style={undefined} />
          <StakeCard
            imgSrc={"avax.png"}
            title={"Avalanche"}
            info={"Stake Ava"} apy={"12.35%"} style={{height:'12rem', width: '20rem'}}  />
        </Col>
        <Col xs>
          <StakeCard imgSrc={"link.jpg"} title={"Link"} info={"Stake Link"} apy={"5%"} style={undefined} />
          <StakeCard imgSrc={"tez.jpg"} title={"Tezos"} info={"Stake Tez"} apy={"15%"} style={{height:'12rem', width: '20rem'}} />
        </Col>
        <Col xs>
          <StakeCard
            imgSrc={"matic.jpg"}
            title={"Matic"}
            info={"Stake Matic"} apy={"3.45%"} style={undefined} />
        </Col>
      </Row>
    </Container>
  );
}

export default CardsGroup;
