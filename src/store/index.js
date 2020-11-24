import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    num:100,
    name:"张三",
    age:18,
    shouquan:localStorage.getItem('userToken')?localStorage.getItem('userToken'):''
  },
  getters:{
    count:state=>{
      return state.num > 120 ? 120 : state.num
    }
  },
//   mutations是操作state数据的方法的集合，比如对该数据的修改、增加、删除等等。
  mutations:{
      change(state,user){
        state.shouquan = user.loginToken
      },
    increment(state,pload){
      // setTimeout(()=>{
        state.num +=pload.n
      // },1000)
    },
    mincrement(state,pload){
      // state.num -=pload.n
      state.num -=3
    }
  },
  actions:{
    AddAction(context){
      // console.log(context)
      setTimeout(()=>{
        context.commit('increment',{n:5})
      },1000)
      // context.dispatch('textAction')
    },
    textAction(){
      console.log("我是actions里面的函数")
    }
  }
})
export default store
