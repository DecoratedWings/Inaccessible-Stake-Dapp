import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import StakeCard from './StakeCard';

function CardsGroup() {
  return (
    <Container>
      <Row>
    <Col xs>
    <StakeCard imgSrc={'eth.jpg'} title={'Ethereum'} info={'Stake Ethereum'}/>
      </Col>
      <Col xs>
      <StakeCard imgSrc={'link.png'} title={'Link'} info={'Stake Link'}/>
      </Col>
      <Col xs>
      <StakeCard imgSrc={'matic.png'} title={'Matic'} info={'Stake Matic'}/>
      </Col>
      </Row>
      </Container>
  );
}

export default CardsGroup;