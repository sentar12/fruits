import Vue from "vue";
import * as wj from "wijmo/wijmo";
import * as wjGrid from "wijmo/wijmo.grid";
// Note that the *.css file will be processed by the css-loader.
import './vendor/wijmo.min.css';
import App from './components/App.vue';
new Vue({
    el: '#app',
    template: '<App/>',
    components: {
      App
    }
  });
