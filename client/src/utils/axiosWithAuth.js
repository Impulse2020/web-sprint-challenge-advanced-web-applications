import axios from 'axios';

function AxiosWithAuth(){
    const token = localStorage.getItem("token");

    return axios.create({
        headers:{
            authorization:token,
        },
        baseURL:"http://localhost:5000"
    });
}

export default AxiosWithAuth;