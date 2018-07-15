<style>
    .wrapper{
        height: 50px;
    }
</style>
<template>
  <scroll  :pulldown = "pulldown" @pulldown = "loadData" @pullup = "pullup" :data= "data">
    <ul class="content">
      <li v-for="(item,index) in data" :key="index">{{item}}</li>
    </ul>
  </scroll>
</template>
<script>
import BScroll from 'better-scroll'
import Scroll from './scroll.vue'
   export default {
       components:{
           Scroll
       },
       data(){
           return {
               data: ["fda","fda","lfs"],
               pulldown: true,
               pullup: true,
               tipShow:false
           }
       },
       methods:{
           loadData(){
               console.log("loaddata");
               setTimeout(()=>{
                   this.data = this.data.concat("a","cs");
                   console.log(this.data);
                   this.tipShow = false;
               },5000)
           }
       }
  }
</script>