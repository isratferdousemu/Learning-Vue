import axios from 'axios';

const state={
    // products:[
    // {
    //     id:'1',
    //     title:'product_1',
    //     price:200
    // },
    // {
    //     id:'2',
    //     title:'product_2',
    //     price:400
    // },
    // ]
};
const getters={
    allproducts:state=>state.products
};
const actions={
    async getProducts({commit}){
      const response=  await axios.get('http://localhost:3000/products');
      commit("setProducts",response.data);
    }
};
const mutations={
    setProducts:(state,products)=>(state.products=products)
};
export default{
    state,
    getters,
    actions,
    mutations
}