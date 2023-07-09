<template lang="">
<div>
    <form @submit.prevent="postData" method="post">
        <input type="text" name="id" v-model="posts.id"><br>
        <input type="text" name="UserId" v-model="posts.UserId"><br>
        <input type="text" name="title" v-model="posts.title"><br>
        <input type="text" name="body" v-model="posts.body"><br>
        <button type="submit">submit</button>
    </form>
</div>
</template>

<script>
// import * as Vue from 'vue' // in Vue 3
 import axios from 'axios'
//  import VueAxios from 'vue-axios'
//  app.use(VueAxios, axios)
export default {
    name: 'PostComponent',
    data() {
        return {
            posts: {
                id: 'null',
                UserId: 'null',
                title: 'null',
                   body: 'null',

            }
        }
    },
    methods: {
        postData(e) {
            axios.post("https://jsonplaceholder.typicode.com/posts", this.posts).then((result) => {
             console.log(result);
            })
             //console.warn(this.posts);
            e.preventDefault(); //stop reload

        }
    }

}
</script>

<style lang="">

</style>
