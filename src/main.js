import Vue from 'vue'
import App from './App'
import router from './router'
// 引mint-ui入全部组件
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
// 引入 mui 组件
import './lib/dist/mui/css/mui.min.css'
import './lib/dist/mui/css/icons-extra.css'
// 引入 vue-resource 
import vueResource from 'vue-resource'

// 注册组件
Vue.use(Mint)

Vue.use(vueResource)

Vue.http.options.root = "http://laoluo.online:5000/"

Vue.http.options.emulateJSON = true

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  // components: { App },
  // template: '<App/>'
  render: c => c(App)
})
