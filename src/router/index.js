import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Location_one from '../views/Location_one'
import Location_two from '../views/Location_two'
import Location_three from '../views/Location_three'
import Location_four from '../views/Location_four'
import Location_five from '../views/Location_five'
import Location_six from '../views/Location_six'
import Location_seven from '../views/Location_seven'
import Location_eight from '../views/Location_eight'
import Location_nine from '../views/Location_nine'
import Location_ten from '../views/Location_ten'
import Location_eleven from '../views/Location_eleven'
import Service_one from '../views/Service_one'
import Service_two from '../views/Service_two'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/about/:id',
    name: 'About',
    component: About
  },
  {
    path: '/locationone',
    name: 'Location_one',
    component: Location_one
  },
  {
    path: '/locationtwo',
    name: 'Location_two',
    component: Location_two
  },
  {
    path: '/locationthree',
    name: 'Location_three',
    component: Location_three
  }
  ,
  {
    path: '/locationfour',
    name: 'Location_four',
    component: Location_four
  }
  ,
  {
    path: '/locationfive',
    name: 'Location_five',
    component: Location_five
  }
  ,
  {
    path: '/locationsix',
    name: 'Location_six',
    component: Location_six
  }
  ,
  {
    path: '/locationseven',
    name: 'Location_seven',
    component: Location_seven
  }
  ,
  {
    path: '/locationeight',
    name: 'Location_eight',
    component: Location_eight
  }
  ,
  {
    path: '/locationnine',
    name: 'Location_nine',
    component: Location_nine
  }
  ,
  {
    path: '/locationten',
    name: 'Location_ten',
    component: Location_ten
  }
  ,
  {
    path: '/locationeleven',
    name: 'Location_eleven',
    component: Location_eleven
  }
  ,
  {
    path: '/serviceone',
    name: 'Service_one',
    component: Service_one
  }
  ,
  {
    path: '/servicetwo',
    name: 'Service_two',
    component: Service_two
  }

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
