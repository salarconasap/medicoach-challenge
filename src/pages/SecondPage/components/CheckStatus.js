import React, { useState } from 'react';
import * as api from '../../../services/api';
import { useDispatch } from 'react-redux';
import { apiStatus } from '../../../actions/photosActions';
import { CustomBtn } from '../../../styles'
import PropTypes from 'prop-types'

const CheckStatus = ({ server }) => {
  const [status, setStatus] = useState(null)
  const dispatch = useDispatch();

  const handleStatus = async () => {
    const status = await api.getStatus(server);
    setStatus(status);
    dispatch(apiStatus(status === 'ok'))
  }

  return (
      <>
        <CustomBtn onClick={handleStatus}>Check Server Status</CustomBtn>
        { status && <p>Server: { status }</p> }
      </>
  );
};


CheckStatus.propTypes = {
  server: PropTypes.string.isRequired
};

CheckStatus.defaultProps = {
  server: null
};

export default CheckStatus;