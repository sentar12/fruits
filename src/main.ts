import Vue from "vue";
import * as wj from "wijmo/wijmo";
import * as wjGrid from "wijmo/wijmo.grid";
// Note that the *.css file will be processed by the css-loader.
import './vendor/wijmo.min.css';
import App from './components/App.vue';
import VueRouter, { RouteConfig } from 'vue-router';
import FruitList from '../src/components/fruitlist/fruitlist.vue'
import FruitDetail from '../src/components/fruitdetail/fruitdetail.vue';

const PageNotFound = { template: '<div>404</div>' };
const viewNames = ['completed', 'active', '*'];
const routes: RouteConfig[] = [
  { path: '/', redirect: '/fruits' },
  { path: '/fruits', component: FruitList },
  { path: '/fruit/:id', component: FruitDetail, props: true },
  { path: '**', component: PageNotFound }
];

const router = new VueRouter({ routes });
Vue.use(VueRouter);
new Vue({
    el: '#app',
    router: router,
    template: '<App/>',
    components: {
      App
    }
  });

  export default { router }; //app