import axios from 'axios';

export const addUser = async (data) => {
    return await axios.post('/api/adduser', data,{
        headers: {
           'Content-Type' : "application/json"
        }
    })
    .then(response => {
       return response.data;
     }); 
};

export const getUsers = async () => {
    return await axios.get('/api/getusers', {
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then(response => {
        return response.data;
    });
};

export const modifyUser = async (data) => {
    return await axios.put('/api/modifyuser', data,{
        headers: {
           'Content-Type' : "application/json"
        }
    })
    .then(response => {
       return response.data;
     }); 
};

export const deleteUser = async (data) => {
    return await axios.delete('/api/deleteuser/'+data,{
        headers: {
           'Content-Type' : "application/json"
        }
    })
    .then(response => {
       return response.data;
     }); 
};