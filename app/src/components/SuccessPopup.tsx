import Alert from 'react-bootstrap/Alert';

export interface popupProps {
    show: boolean;
    setShow: any;
    msg:string;
}
function SuccessPopup(props:popupProps) {

  const handleClose = () => props.setShow(false);

  if (props.show) {
    return (
      <Alert variant="success" onClose={() => handleClose()} dismissible>
        <Alert.Heading>{props.msg}</Alert.Heading>
      </Alert>
    );
  }else return (<></>);
}

export default SuccessPopup;