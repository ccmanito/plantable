// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
//import router from './router'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.css'
//Vue.config.productionTip = false


Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
{
  path : '/',
  components : Home
},{ 
  path : '/Home',
  components : Home
}];

const router = new VueRouter(
{
  routes
});
/* eslint-disable no-new */
var app  = new Vue({
  el: '#app',
  router,
  ...App,
  //components: { App },
  //template: '<App/>'
})
