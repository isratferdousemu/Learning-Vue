<template lang="">
    <div>
        Hello CTM Team!<br>
        This is State management Tutorial.
<ul >
<li v-for="product in allproducts" :key="product">
{{product.title}}--{{product.price}}
</li>
<li v-for="item in allvalues" :key="item">
{{item.userId}}--{{item.userId}}
</li>
</ul>
    </div>
</template>
<script>
import {mapGetters,mapActions} from "vuex";
export default {
    name:'IncrementComponent',
    computed:mapGetters(["allproducts","allvalues"]),


    methods:{
     ...mapActions(["getProducts","dataGet"])  
    },
    created(){
        this.getProducts();
        this.dataGet();
    }
}
</script>
<style lang="">
    
</style>