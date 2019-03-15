// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, {
  size: 'small',
  zIndex: 3000
});

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)


import VueResource from 'vue-resource';
import storage from './model/storage.js';
Vue.use(VueResource);
Vue.http.headers.common['X-Date'] = new Date().getTime().toString();
if (storage.get('user') != null) {
  Vue.http.headers.common['token'] = storage.get('user').token;
}

Vue.config.productionTip = false

import VueDisqus from 'vue-disqus'
Vue.use(VueDisqus)


import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css' //样式文件
Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>',
  data() {
    return {
      value: ''
    }
  }
})
