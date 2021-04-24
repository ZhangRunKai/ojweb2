import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path: '/problem',
        name: 'Problem',
        component: ()=>import('../views/problem/Problem')
      },
      {
        path: '/problems',
        name: 'Problems',
        component: ()=>import('../views/problem/Problems')
      },
      {
        path: '/createProblem',
        name: 'CreateProblem',
        component: ()=>import('../views/problem/CreateProblem')
      },
      {
        path: 'problemManage',
        name: 'ProblemManage',
        component: ()=>import('../views/problem/ProblemManage')
      },
      {
        path: 'labelManage',
        name: 'LabelManage',
        component: ()=>import('../views/problem/LabelManage')
      },
      {
        path: '/contests',
        name: 'Contests',
        component:()=>import('../views/contest/Contests'),

      },
      {
        path: '/contest',
        name: 'Contest',
        component:()=>import('../views/contest/Contest'),
      },
      {
        path: '/contestProblems',
        name: 'ContestProblems',
        component:()=>import('../views/contest/ContestProblems'),
      },
      {
        path: '/contestProblem',
        name: 'ContestProblem',
        component:()=>import('../views/contest/ContestProblem'),
      },
    ]
  },
  {
    path: '/register',
    name: 'Register',
    component: ()=>import('../views/user/Register')
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=>import('../views/user/Login')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
