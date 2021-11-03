/*index.html 실행 후 실행 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
  
// axios 설정 파일 추가, app.vue 실행 시 바로 네트워크 통신이 가능하도록
import axiosConfig from "./apis/axiosConfig"

Vue.config.productionTip = false  // 개발 중 나타는 hint 기능 막기

new Vue({
  // Vue 객체 생성
  router,
  store,

  // 비동기
  render: h => h(App)
}).$mount('#app') // mount 시점에 index.html의 <div id='app'>에 App.vue 내용 추가(component를 렌더링)
