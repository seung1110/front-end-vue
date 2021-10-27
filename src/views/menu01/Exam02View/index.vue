//Exam02View 정의
<template>
  <div class="card">
    <div class="card-header">
      Exam02View
    </div>
    <div class="card-body">
      <sub-a-component />
      <button class="btn btn-info btn-sm mr-2" v-on:click="goUrl">/menu01/exam01view</button>
      <button class="btn btn-info btn-sm mr-2" v-on:click="goUrl()">/menu01/exam01view</button>
      <button class="btn btn-info btn-sm mr-2" @click="goUrl">/menu01/exam01view</button>
      <button class="btn btn-info btn-sm mr-2" @click="goUrl()">/menu01/exam01view</button>
    </div>
  </div>
</template>

<script>
import SubAComponent from "./subAComponent";
export default {
  name: "Exam02View",
  components: {
    SubAComponent,
  },
  data: () => ({}),
  methods: {
    goUrl() {
        this.$router.push("/menu01/exam01view");
        // 모든 component에서 this.$router를 통해 router의 정보를 얻을 수 있다. (내장 객체)
        // push() url 추가 후 이동 의미(promise 반환), 현재 url 입력시 오류 발생 => 해결을 위해 catch 작성을 통해 해결 .catch(()=>{});
    },
  },
};
</script>

<style scoped></style>
