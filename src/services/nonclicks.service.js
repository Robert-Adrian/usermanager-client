import axios from 'axios';

export const modifyClicks = async (data) => {
    return await axios.put('/modifyclicks', data,{
        headers: {
           'Content-Type' : "application/json"
        }
    })
    .then(response => {
       return response.data;
     }); 
};