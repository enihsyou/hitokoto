import Vue from 'vue'
import Router from 'vue-router'
import Word from './views/Word'
import Upload from './views/Upload'
import About from './views/About.vue'
import Login from './views/Login.vue'
import Dashboard from './views/Dashboard'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'word',
      component: Word
    }, {
      path: '/upload',
      name: 'upload',
      component: Upload
    }, {
      path: '/about',
      name: 'about',
      component: About
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    }
  ]
})
