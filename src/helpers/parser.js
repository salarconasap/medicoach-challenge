
export const QR_resp_to_Json = (txt) => {
    const items = txt.split(';');
    let obj = {};
    items.forEach(i => {
        const fields = i.split(':');
        if(fields[0] === 'apiserver'){
            obj = { ...obj, apiserver: i.substring(10)} 
        }else{
            obj = { ...obj, [fields[0]]: fields[1]} 
        }
    });
    return obj;
  };