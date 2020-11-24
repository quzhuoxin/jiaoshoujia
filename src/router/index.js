import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'//@=src目录
import one from '@/components/one'
import home from '@/components/home'
import txbb from '@/components/txbb'
import page from '@/view/page'
import log from '@/components/log'
import register from '@/components/register'
import list from '@/components/list'
import count from '@/components/count'
import sort from '@/view/sort'
import paging from '@/view/paging'


const User = {
  template:'<div><h1>我是爸爸<router-view/></h1></div>'
}
const son = {
  template:'<div><h1><font color = "red">大儿子</font><router-view/></h1></div>'
}
const son1 = {
  template:'<div><h1><font color = "yellow">二儿子</font></h1></div>'
}
const dada = {
  template:'<div><h1><font color = "red">大孙子</font></h1></div>'
}

const xiaoxiao = {
  template:'<div><h1><font color = "red">二孙子</font></h1></div>'
}
// const finda = {
//   template:'<div><h1><font color = "green">不存在</font></h1></div>'
// }

Vue.use(Router)

let router = new Router({
  mode:"history",
  linkExactActiveClass:"nav",//统一激活样式
  routes: [
    {
      path: '/count',
      name: 'count',
      component:count
    },
    {
      path: '/paging',
      name: 'paging',
      component:paging
    },
    {
      path: '/sort',
      name: 'sort',
      component: sort
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/page',
      name: 'page',
      component: page
    },
    {
      path: '/log',
      name: 'log',
      component: log
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect:'/log'
    },{
      path:'/one/:id',
      name:'qzx',
      component:one
    },{
      path:'/home',
      name:'home',
      component:home
    },{
      path:'/txbb',
      name:'txbb',
      component:txbb
    },
   {
      path:'/user/:id',
      name:"User",
      component:User,
      children:[
        {
          path:'/son',
          name:'son',
          component:son,
          children:[
            {
              path:'/dada',
              name:'dada',
              component:dada
            },
            {
              path:'/xiaoxiao',
              name:'xiaoxiao',
              component:xiaoxiao
            }
          ]
        },{
          path:'son1',
          name:'son1',
          component:son1
        }
      ]
    },
    {
      path:'*',
      // component:finda,
      // redirect:(to)=>{
      //   // console.log(to)
      //   if(to.path==='/aaa'){
      //     return '/home'
      //   }else if(to.path==='/bbb'){
      //     return '/one'
      //   }else{
      //     return '/'
      //   }
      // }
    }
  ]
})
router.beforeEach((to,from,next)=>{
  console.log(to);
  if(to.path=='/log'){
    next()
  }else{
    let token = localStorage.getItem('userToken');
    if(token==null||token==''){
      next('/log')
    }else{
      next()
    }
  }
})
export default router;
