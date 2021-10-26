/*index.html 실행 후 실행 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false  // 개발 중 나타는 hint 기능 막기

new Vue({ // Vue 객체 생성
  router,
  render: h => h(App)
}).$mount('#app') // index.html의 <div id='app'>에 App.vue 내용 추가
