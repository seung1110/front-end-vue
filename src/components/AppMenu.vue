<template>
  <ul class="nav flex-column">
    <li class="nav-item">
      <h6 class="text-white">Vue Home</h6>
      <router-link to="/" class="nav-link text-warning">Home</router-link>
      <router-link to="/about" class="nav-link text-warning">About</router-link>
    </li>
    <li class="nav-item">
      <h6 class="text-white">Menu01 : Routing</h6>
      <router-link to="/menu01/exam01view" class="nav-link text-warning">선언적 방식 화면 이동</router-link>
      <router-link to="/menu01/exam02view" class="nav-link text-warning">프로그래밍 방식 화면 이동</router-link>
      <router-link to="/menu01/exam03view" class="nav-link text-warning">중첩 라우팅</router-link>
      <router-link to="/menu01/exam04view" class="nav-link text-warning">이름이 있는 뷰</router-link>
      <router-link to="/menu01/exam05view" class="nav-link text-warning">URL 데이터 전달</router-link>
    </li>
     <li class="nav-item">
      <h6 class="text-white">Menu02 : Component</h6>
      <router-link to="/menu02/exam01expressions" class="nav-link text-warning">표현식 바인딩</router-link>
      <router-link to="/menu02/exam02directives" class="nav-link text-warning">Directives Binding</router-link>
      <router-link to="/menu02/exam03attrbinding" class="nav-link text-warning">Attribute Binding</router-link>
      <router-link to="/menu02/exam04formbinding" class="nav-link text-warning">양방향 Binding</router-link>
      <router-link to="/menu02/exam05forrepeatbinding" class="nav-link text-warning">Repeat Binding</router-link>    
      <router-link to="/menu02/exam06computedbinding" class="nav-link text-warning">Computed Binding</router-link>    
      <router-link to="/menu02/exam07template" class="nav-link text-warning">Template Component</router-link>    
    </li>
    <li class="nav-item">
      <h6 class="text-white">Menu03 : EventHandling</h6>
      <router-link to="/menu03/exam01eventhandling" class="nav-link text-warning">Event 처리</router-link>
      <router-link to="/menu03/exam02watch" class="nav-link text-warning">Event 감시</router-link>
    </li>
    <li class="nav-item">
      <h6 class="text-white">Menu04 : Data Delivery</h6>
      <router-link to="/menu04/exam01props" class="nav-link text-warning">부모에서 자식으로 전달(props 활용)</router-link>
    </li>
    
  </ul>
</template>

<script>
export default {
  name: "AppMenu",
};
</script>
