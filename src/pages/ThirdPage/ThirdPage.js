import { useState } from "react";
import WebcamCapture from "./components/WebcamCapture";
import { useDispatch, useSelector } from 'react-redux';
import { setImg } from "../../actions/photosActions";
import * as api from '../../services/api';
import StatusImg from "./components/StatusImg";
import { CustomImg, CustomBtn } from '../../styles'
import Swal from "sweetalert2";

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
      setLoading(false);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    }
  }

  const handleReset = () => {
    dispatch(setImg(null)) && setImg_preview(null);
  }

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
