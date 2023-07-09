<template lang="">
    <div>
      Fetched a single data 
        
      
    
    <table>
  <tr v-for="item in posts" :key="item">
    <td>{{item.id}}</td>
    <td>   {{item.title}}</td>
    <td>{{item.body}}</td>
      
  </tr>

</table>       
   <p>{{$route.params.id}}</p>
    </div>
</template>
<script>
import {useRoute} from 'vue-router';
import axios from 'axios';
export default {
    name:'DataGet',
     data() {
        return {
            posts: [],
        }

    },
    methods:{
      async getpost() {
        const route=useRoute();
        console.warn("route",route.params.id);
     
        let result_var = await axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
  
        console.warn("get data", result_var);
        this.posts = result_var;

    },
    created(){
      this.getpost();
    }

    }
    
}
</script>
<style lang="">
    
</style>