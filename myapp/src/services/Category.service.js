import axios from 'axios';

const BASEADDRESS = import.meta.env.VITE_BASE_URL;

function getCategories(){
    return axios.get(`${BASEADDRESS}/api/CategoryAPI/getall`);
}

export const CategoryService = {
    getCategories
}