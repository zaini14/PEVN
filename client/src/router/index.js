import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import User from '@/views/User.vue'
import Siswa from '@/views/Siswa.vue'
import Spp from '@/views/Spp.vue'
import Transaction from '@/views/Transaction.vue'
import History from '@/views/History.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
  	path: '/user',
  	component: User
  },
  {
  	path: '/siswa',
  	component: Siswa
  },
  {
  	path: '/spp',
  	component: Spp
  },
  {
    path: '/transaction',
    component: Transaction
  },
  {
    path: '/history',
    component: History
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
