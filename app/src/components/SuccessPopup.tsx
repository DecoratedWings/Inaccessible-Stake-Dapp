import Alert from 'react-bootstrap/Alert';

export interface popupProps {
    show: boolean;
    setShow: any;
}
function SuccessPopup(props:popupProps) {

  const handleClose = () => props.setShow(false);

  if (props.show) {
    return (
      <Alert variant="success" onClose={() => handleClose()} dismissible>
        <Alert.Heading>Success! You Are connected!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
    );
  }else return (<></>);
}

export default SuccessPopup;