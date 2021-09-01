import React from 'react';
import { useSelector } from 'react-redux';
import { ImgDetails } from '../../../styles';

function StatusImg() {
const { apiserver, img } = useSelector( state => state.photos );


return (img && 
        <ImgDetails>
            <p>file: { img?.file }</p>
            <p>status: { img?.status }</p>
            <p>URL: <a target='_blank' rel="noreferrer" href={`${apiserver}/api/v1.0/image/${img?.file}`}>ver imagen</a></p>
        </ImgDetails>
  );
};

export default StatusImg