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
        path: '/',
        name: 'About',
        component: ()=>import('../views/About')
      },
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
        path: '/contestView',
        name: 'ContestView',
        component: ()=>import('../views/contest/ContestView'),
        // children:[
        //
        // ]
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
        path: '/contestMain',
        name: 'ContestMain',
        component:()=>import('../views/contest/ContestMain'),
        children:[
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
        path: '/contestManage',
        component:()=>import('../views/contest/admin/ContestsManage'),
      },
      {
        path: '/createContest',
        component:()=>import('../views/contest/admin/CreateContest'),
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
  }
]

const router = new VueRouter({
  routes
})

export default router
