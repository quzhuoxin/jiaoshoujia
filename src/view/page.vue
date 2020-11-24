<template>
  <div>
      <h1>♥</h1>
    <top :datalist="navlist"></top>
    
    <div class="content">
      <h1>{{chuan}}</h1>
    </div>
    <txbb @titlechange="getdata($event)"></txbb>
  </div>
</template>

<script>
import top from "../components/top"
import txbb from "../components/txbb"
export default {
    components:{
        top,
        txbb
    },
    data(){
      return {
        chuan:'',
        navlist:[
          {name:'第一',age:18},
          {name:'第二',age:18},
          {name:'第三',age:18},
          {name:'第四',age:18},
          {name:'第五',age:18},
        ]
      }
    },
    methods:{
      getdata(val){
        console.log(val);
        this.chuan=val;
    },
    }


}
</script>

<style>

</style>