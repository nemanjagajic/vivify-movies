import Vue from 'vue'
import VueRouter from 'vue-router'
import VuejsDialog from 'vuejs-dialog';
import App from './App.vue'
import Movies from "./screens/Movies"
import CreateMovie from "./screens/CreateMovie"
import store from './store/store'
import MovieDetails from "./screens/MovieDetails"

import 'vuejs-dialog/dist/vuejs-dialog.min.css';

Vue.use(VueRouter)
Vue.use(VuejsDialog);

Vue.config.productionTip = false

const routes = [
  {
    path: '/',
    component: Movies,
  },
  {
    path: '/createMovie',
    component: CreateMovie
  },
  {
    path: '/movies/:title',
    component: MovieDetails
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
