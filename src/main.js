import Vue from 'vue'
import Vuetify from 'vuetify'
import './stylus/main.styl'
import App from './App'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import * as firebase from 'firebase'
Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyA8Psdo165Xz8YNrIMT4RpxAk7JW3vxPl4',
      authDomain: 'vue-devmeetup-78d8d.firebaseapp.com',
      databaseURL: 'https://vue-devmeetup-78d8d.firebaseio.com',
      projectId: 'vue-devmeetup-78d8d',
      storageBucket: 'vue-devmeetup-78d8d.appspot.com'
    })
  }
})
