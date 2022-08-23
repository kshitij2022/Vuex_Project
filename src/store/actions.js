import axios from 'axios';
export const getProducts = ({ commit}) =>{
    axios.get('https://fakestoreapi.com/products')
    .then(response =>{
        commit('SET_PRODUCTS',response.data);
    console.log(response.data);
    })
}

export const getProduct =({ commit }, productId )=>{
    axios.get(`https://fakestoreapi.com/products/${productId}`)
    .then(response =>{
        commit('SET_PRODUCT',response.data);
    console.log("data",response.data);
    })
}