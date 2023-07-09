import axios from 'axios';
const state={

    values:[]
};
const getters={
    allvalues:state=>state.values
};

const actions={
    async dataGet({commit}){
        const result=await axios.get("https://jsonplaceholder.typicode.com/posts");
        commit("dataall",result.data);
        
        
    }

};
const mutations={
    dataall:(state,values)=>(state.values=values)
    
  

};
export default{
    state,
    getters,
    actions,
    mutations
}