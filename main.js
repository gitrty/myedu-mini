import Vue from 'vue'
import App from './App'
import './public/base.css'

import store from './store'
Vue.prototype.$store = store

import mixins from './common'
Vue.use(mixins)

import toyoBar from '@components/toyo-bar'
import toyoRate from '@components/toyo-rate'
Vue.component('toyoBar', toyoBar)
Vue.component('toyoRate', toyoRate)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App,
  store
})
app.$mount()
