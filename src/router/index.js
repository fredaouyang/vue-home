import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ScrollParent from '@/components/scrollParent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: ScrollParent
    },
    {
      path: '/scrollParent',
      name: 'ScrollParent',
      component: ScrollParent
    }
  ]
})
