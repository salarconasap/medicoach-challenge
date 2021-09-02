
export const QR_resp_to_Json = (txt) => {
    let obj = {};
    if(txt){
        const items = txt.split(';');
        items.forEach(i => {
            const fields = i.split(':');
            if(fields[0] === 'apiserver'){
                obj = { ...obj, apiserver: i.substring(10)} 
            }else{
                obj = { ...obj, [fields[0]]: fields[1]} 
            }
        });
    }
    return obj;
  };