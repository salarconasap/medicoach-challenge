import axios from 'axios'

export const getStatus = (server) => {
  return axios
    .get(`${server}api/v1.0/status`)
    .then((response) => {
      if(response && response?.data?.status){
        return response?.data?.status
      }else{
        return 'off'
      }
    })
    .catch((error) => {
      // console.log(error);
      return 'off'
    });
};

export const UploadImg = (server, img, user, password) => {
  return axios.post(`${server}api/v1.0/ranking`, 
  { 
    picture: img 
  },{
    auth: {
      username: user,
      password: password
    }
  })
    .then((response) => {
      // console.log(response)
      return response;
    })
    .catch((error) => {
      // console.log(error);
      return error;
    });
};
