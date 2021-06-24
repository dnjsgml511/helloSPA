import axios from 'axios';


export function login(id, pw) {
    const param = { params: { id: id, pw: pw } }
    return axios.get("localhost:8511/login", param)
}