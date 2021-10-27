import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue' // views 폴더에 존재하는 vue 파일 추가

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',  // 선택 사항, 이름을 통해서도 라우팅 가능
    component: Home // path 이동 시 어떤 View를 보여줄 것인지
  }, // 하나의 경로에 하나의 객체
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue') // 사용자가 요청 시 vue 파일 로딩
    // component: About // 접근과 동시에 로딩, import About from '../views/About.vue' 추가 필요
    // webpackChunkName 최종 산출물(build)시 해당 파일이 포함될 위치
  },
  {
    path: "/menu01/exam01view",
    name : "menu01_exam01view",
    component : () => import(/* webpackChunkName: "menu01" */'../views/menu01/Exam01View.vue')
  },
  {
    path:"/menu01/exam02view",
    name: "menu01_exam02view",
    component : () => import(/* webpackChunkName: "menu01" */'../views/menu01/Exam02View')
  },
  {
    path: "/menu01/exam03view",
    component: () => import(/* webpackChunkName: "menu01" */'../views/menu01/Exam03View'),
    children: [
      {
        path: "subacomponent",
        component: () => import(/* webpackChunkName: "common" */'../components/menu01/SubAComponent'),
      },{
        path: "subbcomponent",
        component: () => import(/* webpackChunkName: "common" */'../components/menu01/SubBComponent'),
      }
    ]
  },
  {
    path: "/menu01/exam04view",
    component: () => import(/* webpackChunkName: "menu01" */'../views/menu01/Exam04View'),
    children:[
      {
        path: "",
        components: { // 지정한 router-view의 이름을 key로
          default : () => import(/* webpackChunkName: "common" */'../components/menu01/SubAComponent'),
          rv1 : () => import(/* webpackChunkName: "common" */'../components/menu01/SubBComponent'),
          rv2 : () => import(/* webpackChunkName: "common" */'../components/menu01/SubCComponent')

        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
