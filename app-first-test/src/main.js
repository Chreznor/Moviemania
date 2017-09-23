// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import axios from 'axios';
import router from './router'
import VueMaterial from'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)
Vue.use(Vuex)
Vue.material.registerTheme('default', {
  primary: 'purple',
  accent: 'orange',
  warn: 'red',
  background: 'white'
})

const store = new Vuex.Store({
  state: {
    movies: [],
    count: 0
  },
  mutations: {
    loadMovies (state, data) {
      state.movies = data
    },
    increment (state) {
      state.count++
    }
  },
  actions: {
    loadMovies ({commit}, data) {
      commit('loadMovies', data)
    },
    increment ({commit}) {
      commit('increment')
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
