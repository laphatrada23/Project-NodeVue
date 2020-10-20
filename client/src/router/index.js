import Vue from 'vue'
import Router from 'vue-router'
// Authen
import Login from '@/components/Login'
// Users
import UserIndex from '@/components/Users/Index'
import UserCreate from '@/components/Users/CreateUser'
import UserEdit from '@/components/Users/EditUser'
import UserShow from '@/components/Users/ShowUser'
// Queue
import QueueCreate from '@/components/Queue/CreateQueue'
import QueueEdit from '@/components/Queue/EditQueue'
import QueueIndex from '@/components/Queue/Index'
import QueueShow from '@/components/Queue/ShowQueue'
import Indexadmin from '@/components/Indexadmin'


Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'users-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },
    // authen
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    //Queue
    {
      path: '/queues',
      name: 'queues',
      component: QueueIndex
    },
    {
      path: '/queue/create',
      name: 'queues-create',
      component: QueueCreate
    },
    {
      path: '/queue/edit/:queueId',
      name: 'queue-edit',
      component: QueueEdit
    },
    {
      path: '/queue/:queueId',
      name: 'queue',
      component: QueueShow
    },
    {
      path: '/Indexadmin/IndexadminId',
      name: 'Indexadmin',
      component: Indexadmin
    },
   
  ]
})