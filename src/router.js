import Vue from 'vue'
import Router from 'vue-router'
import dashboard from './components/dashboard'
import lunchDetails from './components/lunchDetails'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/:place_id',
      name: 'lunchDetails',
      component: lunchDetails
    }
  ]
})
