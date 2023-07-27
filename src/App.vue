<template>
<!-- <img alt="Vue logo" src="./assets/logo.png"> -->
<!-- <HelloWorld msg="Learning Vue" /> -->
<router-link to="/insert">Insert Data</router-link><br>
<router-link to="/statemanagement">State management</router-link>

<router-view></router-view>
</template>

<script>


// import HelloWorld from './components/HelloWorld.vue'

  // import PostComponent from './components/PostComponent.vue';
 

export default {
    name: 'App',
  
   
    components:{
    
      //  UpdateComponent,
  
    }
};
</script>

