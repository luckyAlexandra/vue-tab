import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import Tabs from './components/tabs'
Vue.use(Tabs)

new Vue({
  render: h => h(App),
}).$mount('#app')
