import Vue from 'vue'
// 引入@vue/composition-api插件
import VueCompositionApi from '@vue/composition-api'
import App from './App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false
// 全局使用VueCompositionApi插件
Vue.use(VueCompositionApi)

declare module '@vue/composition-api/dist/component/component' {
  interface SetupContext {
    readonly refs: { [key: string]: Vue | Element | Vue[] | Element[] }
  }
}

new Vue({
  render: h => h(App)
}).$mount('#app')
