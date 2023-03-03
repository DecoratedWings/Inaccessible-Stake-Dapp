import Alert from "react-bootstrap/Alert";
import { useState } from "react";

function PhishingBanner() {
  const [show, setShow] = useState(true);

  return (
    <>
      {show ? (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Bewared of Phishing Scams!</Alert.Heading>
          <p className="mb-0">
            Make sure you are connected to https://notsogreatux.com
          </p>
        </Alert>
      ) : (
        ""
      )}
    </>
  );
}

export default PhishingBanner;
