<template>
<div>
    <v-container class="bg-blue-grey-lighten-3 mb-6 mt-6 ">

        <v-card class="align-center mx-auto" width="400">
            <v-card-item>
                <v-card-title class="align-center d-flex justify-center">Update Form</v-card-title>
                <v-card-subtitle class="align-center d-flex justify-center">Update Data Form of ID No {{$route.params.id}}</v-card-subtitle>
            </v-card-item>
            <v-sheet width="350" class="mx-auto">
         

                <v-form @submit.prevent="UpdateData" method="post">
                

                    <v-text-field v-model="list.id" label="Id" name="id"></v-text-field>
                    <v-text-field v-model="list.userId" label="userId" name="userId"></v-text-field>
                    <v-textarea clearable label="Body" v-model="list.body" name="body"></v-textarea>
                    <v-text-field class="size" v-model="list.title" name="title"></v-text-field>
                    <v-btn type="submit" block class="mb-5" color="green">Submit</v-btn>
                </v-form>
            </v-sheet>
            <!-- <form @submit.prevent="UpdateData" method="post">
                <input type="text" name="id" v-model="list.id"><br>
                <input type="text" name="UserId" v-model="list.userId"><br>
                <input type="text" name="body" v-model="list.body"><br>
                <input type="text" name="title" v-model="list.title"><br>
                <div justify="center" align="center">
                    <v-btn :active="true" type="submit" outlined text color="green" class="pt-100">
                        submit
                    </v-btn>
                </div>

            </form> -->
        </v-card>

    </v-container>
</div>
</template>

<script>
import { ValidationProvider } from 'vee-validate';
import axios from 'axios';
import {
    useRoute
} from 'vue-router';
export default {
    name: 'UpdateComponent',
    ValidationProvider,
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

<style>
.size {
    font-size: 40px;
}
</style>
