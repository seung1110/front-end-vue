<template>
  <div class="card">
    <div class="card-header">
      Exam01LifeCycleHook
    </div>
    <div class="card-body">
        <p>data : {{data}}</p>
        <button class="btn btn-sm btn-info" @click="changeData">변경</button>
        <hr/>
        <child :data="data"/>
    </div>
  </div>
</template>

<script>
import Child from './Child.vue';
export default {
  name: "Exam01LifeCycleHook",
  components: {Child},
  data: () => ({
      data : ""
  }),
  methods: {
      changeData(){
          this.data += Math.floor(Math.random()*100);
      }
  },
  // LifeCycleHook 정의
  beforeCreate() {
    console.log("beforeCreate state");
  },
  created() { // component가 생성된 상태, DOM에 연결되기 전!, RESTful API에 데이터 받아오기 좋은 시점
    console.log("created state");
  },
  beforeMount() { // component가 DOM에 연결되기 직전, template에 정의된 내용을 render()함ㅅ구로 변환
    console.log("beforeMount state");
  },
  // 이 사이에 render()가 실행
  mounted() {// component가 화면에 표시된 상태, refs 같은 경우 여기서 사용 가능
    console.log("mounted state"); 

  },
  beforeUpdate() {
       console.log("beforeUpdate state"); 
  },
  updated() { // props or data 변경 시 => 렌더링이 다시 일어남
     console.log("updated state"); 
  }, 
  beforeDestroy() { // component destroy 직전
    console.log("beforeDestroy state");
  },
  destroyed() {
    console.log("destroyed state");
  },
};
</script>

<style scoped></style>
