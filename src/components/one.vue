<template>
  <div>
      <h1>🐏啊🦅</h1>
      <h2>{{road}}</h2>
      <button @click="go()">go home</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      road:'',
      name:'🐏🐏',
      age:10
    }
  },
  mounted(){
    console.log(this.$route.params.id);
    this.road = this.$route.params.id;
  },
  methods:{
    go(){
      this.$router.push("/home?name="+this.name+"&age="+this.age);
      // this.$router.push({
      //   path:"/home",
      //   query:{
      //     name:"🐏",
      //     age:12
      //   }
      // })
      this.$router.push({
        name:'home',
        params:{
          name:"🐖",
          age:234
        }

      })
    }
  }
  
}
</script>

<style>

</style>