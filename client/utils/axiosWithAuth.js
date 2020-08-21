import axios from 'axios';

function AxiosWithAut(){
    const token = localStorage.getItem("token");

    return axios.create({
        headers:{
            authorization:token,
        },
        baseURL:"http://localhost:5000"
    });
}

export default AxiosWithAuth;