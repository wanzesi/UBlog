import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import Mine from '../pages/mine'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'tuanjian',
          props: true,
          component: ()=>import('../components/homeCom/regiment.vue')
          
        },
        {
          path: 'qinzi',
          props: true,
          component: ()=>import('../components/homeCom/qinzi.vue')
        },
        {
          path: 'faxian',
          props: true,
          component: ()=>import('../components/homeCom/faxian.vue')
        },
        {
          path:'regimentPeople',
          props:true,
          component:()=>import('../pages/home/regimentPeople')
        },
        {
          path:'people',
          props:true,
          component:()=>import('../components/homeCom/people')
        }
      ]
      
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine,
      children: [
        {
          path: 'membership',
          props: true,
          component: ()=>import('../components/mineCom/memberShip.vue')
        },
        {
          path: 'order',
          props: true,
          component: ()=>import('../components/mineCom/myOrder.vue')
        },
        {
          path: 'information',
          props: true,
          component: ()=>import('../components/mineCom/myInformation.vue')
        },
        {
          path:'mycard',
          props:true,
          component:()=>import('../components/mineCom/myCard')
        }
      ]
    }
    
  ]
})
