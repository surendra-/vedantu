import axios from 'axios';

const sendRequest = (method, url, data='', callback)=>{
    axios({
        url,
        method: method,
        headers: { 'Content-Type': 'application/json'},
      })
      .then((response) => {
        const { data } = response;
        callback(null, data)
      })
      .catch((err)=>{
        callback(err, null)
      })

}

export default {
    sendRequest
}