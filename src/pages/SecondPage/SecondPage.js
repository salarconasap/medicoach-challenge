import React from 'react';
import ScanQR from './components/ScanQR';
import CheckStatus from './components/CheckStatus';
import { useDispatch, useSelector } from 'react-redux';
import { scanQR } from '../../actions/photosActions';
import { CustomLink } from '../../styles'

function SecondPage() {
  const dispatch = useDispatch();
  const { apiserver, api_status } = useSelector( state => state.photos );
  const handleResult = (x) => dispatch(scanQR(x))

  return (
    apiserver ?
      <>
        <CheckStatus server={apiserver}  />
        { api_status && <CustomLink to='/thirdpage'>Take Photo & upload it</CustomLink> } 
      </>
      :
      <ScanQR handleResult={handleResult} />
  );
}

export default SecondPage;
