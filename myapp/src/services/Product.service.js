import axios from 'axios';
import axiosClient from '../helpers/axiosClient';

const BASEADDRESS = import.meta.env.VITE_BASE_URL;

function getProducts(){
    return axiosClient.get(`${BASEADDRESS}/api/ProductAPI/getall`);
}

function addProduct(productToAdd)
{
    return axiosClient.post(`${BASEADDRESS}/api/ProductAPI/add`, productToAdd)
}

function deleteProduct(id){
    return axiosClient.delete(`${BASEADDRESS}/api/ProductAPI/delete/${id}`);
}


function getProductById(id){
    return axiosClient.get(`${BASEADDRESS}/api/ProductAPI/get/${id}`);
}


export const ProductService = {
    getProducts,
    addProduct,
    deleteProduct,
    getProductById
}