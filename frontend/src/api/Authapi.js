import axios from "axios"
const url = "http://localhost:4000/users"
const userLogin = async (email , password) => {
    const res = await axios.post(`${url}/login`,{
        email,
        password
    });
    return res;
}

const userRegister = async (userName , email , password) => {
    const res = await axios.post(`${url}/signup`,{
        userName,
        email,
        password
    });
    return res;
}

export {userLogin , userRegister};