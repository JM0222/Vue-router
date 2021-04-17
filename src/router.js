import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const About = () => {
  return import("./views/About.vue")
}
const Users = () => {
  return import("./views/Users.vue")
}
const UsersDetail = () => {
  return import("./views/UsersDetail.vue")
}
const UsersEdit = () => {
  return import("./views/UsersEdit.vue")
}



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
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/users',
      name: 'users',
      beforeRouteEnter: (to, from, next) => {
        next()
      },
      beforeRouteLeave: (to, from, next) => {
        next()
      },
      component: Users,
      children: [
        {
          path:':id',
          name: 'users-detail',
          component: UsersDetail,
        },
        {
          path:':id/edit',
          name: 'users-edit',
          component: UsersEdit,
        }
      ]
    },
    {
      path:'/redirect-me',
      redirect: '/'
    },
    {
      path:'/*',
      redirect: '/'
    }
    
  ]
})
