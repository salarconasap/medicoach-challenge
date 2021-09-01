import { useState } from "react";
import WebcamCapture from "./components/WebcamCapture";
import { useDispatch, useSelector } from 'react-redux';
import { setImg } from "../../actions/photosActions";
import * as api from '../../services/api';
import StatusImg from "./components/StatusImg";
import { CustomImg, CustomBtn } from '../../styles'


function ThirdPage() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  const {apiserver,user, password, img } = useSelector( state => state.photos );
  const [img_preview, setImg_preview] = useState(null)

  const handleUpload = async () => {
    setLoading(true);
    const resp_upload = await api.UploadImg(apiserver, img_preview, user, password);
    setLoading(false);
    if(resp_upload.status === 200){
      dispatch(setImg(resp_upload?.data))
    }
  }


  return (
    img_preview ?
    <>
      <CustomImg src={img_preview} />
      { img ? <StatusImg /> : <CustomBtn onClick={handleUpload} disabled={ loading || img }>Upload</CustomBtn> }
    </>
    : 
    <WebcamCapture getImg={setImg_preview} />
  );
}

export default ThirdPage;
