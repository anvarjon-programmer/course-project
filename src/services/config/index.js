import axios from "axios";
export const axiosInstanse = axios.create({
    baseURL: 'https://crm.mquvonchbek.uz',
    headers:{
        'Content-Type':'application/json'
    }
})