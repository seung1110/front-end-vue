<template>
  <div class="card">
    <div class="card-header">
      Home View
    </div>
    <div class="card-body">
      <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <hello-world /> <!-- 이 위치에 HelloWorld component를 넣고자 한다. 단어별 - 로 구분, 전부 소문자 변환 -->
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue"; // import를 통해 가져옴, import 명은 변경 가능

export default {
  name: "Home",
  components: {
    HelloWorld // HelloWorld 객체를 components에 추가해서 위의 template에서 <HelloWorld> 사용 가능
  },
};
</script>
