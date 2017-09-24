import Vue from 'vue'
import Router from 'vue-router'
import Maincontainer from '@/components/Main-container'
import EditPage from '@/components/EditPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main-container',
      component: Maincontainer
    },
    {
      path: '/edit-page/:movieId',
      name: 'edit-page',
      component: EditPage
    }
  ]
})
