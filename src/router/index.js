import Vue from 'vue'
import Router from 'vue-router'
import Play from '@/components/play'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Play',
      component: Play
    }
  ]
})
