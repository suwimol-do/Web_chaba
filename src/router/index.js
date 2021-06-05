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
import Service_one from '../views/Service_one'
import Service_two from '../views/Service_two'
import Service_three from '../views/Service_three'
import Service_four from '../views/Service_four'
import Service_five from '../views/Service_five'
import Service_six from '../views/Service_six'
import Service_seven from '../views/Service_seven'
import Service_eight from '../views/Service_eight'
import Service_nine from '../views/Service_nine'
import Service_ten from '../views/Service_ten'
import Product_one from '../views/Product_one'
import Product_two from '../views/Product_two'
import Product_three from '../views/Product_three'
import Product_four from '../views/Product_four'
import Product_five from '../views/Product_five'
import Product_six from '../views/Product_six'
import Product_seven from '../views/Product_seven'
import Product_eight from '../views/Product_eight'
import Product_nine from '../views/Product_nine'
import Product_ten from '../views/Product_ten'


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
  ,
  {
    path: '/servicethree',
    name: 'Service_three',
    component: Service_three
  }
  ,
  {
    path: '/servicefour',
    name: 'Service_four',
    component: Service_four

  }
  ,
  {
    path: '/servicefive',
    name: 'Service_five',
    component: Service_five
  }
  ,
  {
    path: '/servicesix',
    name: 'Service_six',
    component: Service_six
  }
  ,
  {
    path: '/serviceseven',
    name: 'Service_seven',
    component: Service_seven
  }
  ,
  {
    path: '/serviceeight',
    name: 'Service_eight',
    component: Service_eight
  }
  ,
  {
    path: '/servicenine',
    name: 'Service_nine',
    component: Service_nine
  }
  ,
  {
    path: '/serviceten',
    name: 'Service_ten',
    component: Service_ten
  }

  ,
  {
    path: '/Productone',
    name: 'Product_one',
    component: Product_one
  }
  ,
  {
    path: '/Producttwo',
    name: 'Product_two',
    component: Product_two
  }
  ,
  {
    path: '/Productthree',
    name: 'Product_three',
    component: Product_three
  }
  ,
  {
    path: '/Productfour',
    name: 'Product_four',
    component: Product_four
  }
  ,
  {
    path: '/Productfive',
    name: 'Product_five',
    component: Product_five
  }
  ,
  {
    path: '/Productsix',
    name: 'Product_six',
    component: Product_six
  }
  ,
  {
    path: '/Productseven',
    name: 'Product_seven',
    component: Product_seven
  }
  ,
  {
    path: '/Producteight',
    name: 'Product_eight',
    component: Product_eight
  }
  ,
  {
    path: '/Productnine',
    name: 'Product_nine',
    component: Product_nine
  }
  ,
  {
    path: '/Productten',
    name: 'product_ten',
    component: Product_ten
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
