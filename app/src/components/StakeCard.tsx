import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';

export interface stakeCardProps {
    imgSrc: string; 
    title: string;
    info: string;
    apy: string;
    style: any;
}
function StakeCard(props:stakeCardProps) {
  return (
      <Card className="bg-dark text-white" style={{ height:'25rem', width: '20rem', margin:"15px" }}>
        <Card.Img variant="top" src={props.imgSrc} alt="logo" style={props.style}/>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.info}
          </Card.Text>
          <h3>
            APY is: {props.apy}
          </h3>
          <Button variant="secondary">Stake</Button>{' '}
        </Card.Body>

      </Card>
  );
}

export default StakeCard;