import React from 'react';
import Webcam from "react-webcam";
import { CustomBtn } from '../../../styles'
import PropTypes from 'prop-types'

const videoConstraints = {
  width: 220,
  height: 200,
  facingMode: "user"
};

const WebcamCapture = ({ getImg }) => {
const webcamRef = React.useRef(null);

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot({width: 512, height: 512});
      getImg(imageSrc)
    },
    [webcamRef]
  );

  return (
    <>
      <Webcam
        audio={false}
        height={200}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />
      <CustomBtn 
        onClick={(e)=>{e.preventDefault();capture();}}
      >Capture</CustomBtn>
    </>
  );
}

WebcamCapture.propTypes = {
  getImg: PropTypes.func
}

WebcamCapture.defaultProps = {
  getImg: ()=>{}
}

export default WebcamCapture;