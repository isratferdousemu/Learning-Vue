<template lang="">
<div>
<v-card text="...">
    Update Data Form of ID No {{$route.params.id}}
    <form @submit.prevent="UpdateData" method="post">
        <input type="text" name="id" v-model="list.id"><br>
        <input type="text" name="UserId" v-model="list.userId"><br>
        <input type="text" name="body" v-model="list.body"><br>
        <input type="text" name="title" v-model="list.title"><br>
        
        <v-btn :active="true" type="submit">
      submit  
        </v-btn >

    </form>
</v-card>


</div>
</template>

<script>
import axios from 'axios';
import {
    useRoute
} from 'vue-router';
export default {
    name: 'UpdateComponent',
    data() {
        return {
            list: [],
        }
    },

    methods: {
        async getdata() {
            const route = useRoute();
            console.warn(route);

            await axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`).then((result) => {
                console.warn(result);
                this.list = result.data;
            });

        },

        UpdateData() {
            axios.post("https://jsonplaceholder.typicode.com/posts", this.list).then((result) => {
                console.log("updated Data", result);

            });

        }

    },

    created() {
        this.getdata();
    }

}
</script>

<style lang="">

</style>
