import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';

export interface stakeCardProps {
    imgSrc: string; 
    title: string;
    info: string;
}
function StakeCard(props:stakeCardProps) {
  return (
      <Card className="bg-dark text-white" style={{ height:'25rem', width: '20rem' }}>
        <Card.Img variant="top" src={props.imgSrc} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.info}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
  );
}

export default StakeCard;