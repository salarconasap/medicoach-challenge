import React from 'react';
import QrReader from 'react-web-qr-reader';
import { QR_resp_to_Json } from '../../../helpers/parser';

const ScanQR = ({ handleResult }) => {
  const delay = 500;

  const previewStyle = {
    height: 240,
    width: 320
  };

  const handleScan = (result) => {
    if (result.data) {
        const r = QR_resp_to_Json(result.data)
        handleResult(r);
    }
  };

  const handleError = (error) => {
    console.log(error);
  };

  return (
      <QrReader
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
  );
};

export default ScanQR;