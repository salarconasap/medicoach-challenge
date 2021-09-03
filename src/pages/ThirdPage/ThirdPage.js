import { useState } from "react";
import WebcamCapture from "./components/WebcamCapture";
import { useDispatch, useSelector } from 'react-redux';
import { setImg } from "../../actions/photosActions";
import * as api from '../../services/api';
import StatusImg from "./components/StatusImg";
import { CustomImg, CustomBtn } from '../../styles';
import * as alerts from '../../alerts';

function ThirdPage() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  const {apiserver,user, password, img } = useSelector( state => state.photos );
  const [img_preview, setImg_preview] = useState(null)

  const handleUpload = async () => {
    setLoading(true);
    const resp_upload = await api.UploadImg(apiserver, img_preview, user, password);
    if(resp_upload.status === 200){
      dispatch(setImg(resp_upload?.data));
      alerts.success();
    }else{
      alerts.error();
    }
    setLoading(false);
  }

  const handleReset = () => dispatch(setImg(null)) && setImg_preview(null);

  if(img_preview && !img){
    return(
       <>
        <CustomImg src={ img_preview } />
        <CustomBtn onClick={ handleUpload } disabled={ loading || img }>Upload</CustomBtn>
        <CustomBtn onClick={ () => setImg_preview(null)} disabled={ loading || img }>Cancel</CustomBtn>
      </>)
  }

  if(img){ 
    return(
      <>
        <StatusImg />
        <CustomBtn onClick={handleReset}>Take more pictures</CustomBtn>
      </>
    )  
  }

  return ( <WebcamCapture getImg={setImg_preview} /> );
}

export default ThirdPage;
