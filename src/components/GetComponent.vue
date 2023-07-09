<template lang="">
    <div>
    <!-- start vuetify -->

 

      <!-- End vuetify -->
       <table>
        <tr>
            <th>userId</th>
            <th>id</th>
            <th>title</th>
        </tr>
        <tr v-for="item in list" :key="item">
            <td>{{item.id}}</td>
            <td>{{item.userId}}</td>
            <td>{{item.title}}</td>
            <td><router-link :to="`/post/${item.id}`">View</router-link></td>
            <td><router-link :to="`/update/${item.id}`">Update</router-link></td>
           
        </tr>

    </table>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    
    name:'GetComponent',
    data() {
        return {
            list: [],
        }

    },
    async mounted() {
 
        let result= await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.warn("api data", result.data);
        this.list = result.data;

    },
}
</script>
<style lang="">
    
</style>