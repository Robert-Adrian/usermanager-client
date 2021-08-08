import axios from 'axios';

export const addUser = async (data) => {
    return await axios.post('/adduser', data,{
        headers: {
           'Content-Type' : "application/json"
        }
    })
    .then(response => {
       return response.data;
     }); 
};

export const getUsers = async () => {
    return await axios.get('/getusers', {
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then(response => {
        return response.data;
    });
};

export const modifyUser = async (data) => {
    return await axios.put('/modifyuser', data,{
        headers: {
           'Content-Type' : "application/json"
        }
    })
    .then(response => {
       return response.data;
     }); 
};

export const deleteUser = async (data) => {
    return await axios.delete('/deleteuser/'+data,{
        headers: {
           'Content-Type' : "application/json"
        }
    })
    .then(response => {
       return response.data;
     }); 
};