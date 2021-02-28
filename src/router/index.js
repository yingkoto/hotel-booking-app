import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import MyBookings from '../views/MyBookings'
import BookingList from '../views/BookingList'
import BookingForm from '../views/BookingForm'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/mybookings',
    name: 'mybookings',
    component: MyBookings
  },
  {
    path: '/bookinglist',
    name: 'bookinglist',
    component: BookingList
  },
  {
    path: '/bookingform',
    name: 'bookingform',
    component: BookingForm
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
