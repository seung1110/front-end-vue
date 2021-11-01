<template>
  <div class="card">
    <div class="card-header">
      Exam04Ref
    </div>
    <div class="card-body">
      <p>data1 : {{ data1 }}</p>
      <button class="btn btn-info btn-sm mr-2" @click="handleChildData">자식 데이터 읽기</button>
      <button class="btn btn-info btn-sm" @click="handleChildMethod">자식 method call</button>
      <hr />
      <child ref="childRef" />
      <hr />
      <div class="d-flex">
        <input type="text" ref="inputRef" />
        <button class="btn btn-info btn-sm mr-2" @click="handleInputFocus">요소 포커스 주기</button>
        <button class="btn btn-info btn-sm" @click="handleInputValue">요소의 값 변경</button>
      </div>
    </div>
  </div>
</template>

<script>
import Child from "./Child.vue";
export default {
  name: "Exam04Ref",
  components: {
    Child,
  },
  data: () => ({
    data1: "parentData",
  }),
  methods: {
    parentMethod() {
      console.log("parentMehtod 실행");
    },
    handleChildData() {
      console.log(this.$refs.childRef.data1);
    },
    handleChildMethod() {
      this.$refs.childRef.childMehod();
    },handleInputFocus(){
      this.$refs.inputRef.focus();
    },
    handleInputValue(){
      this.$refs.inputRef.value += "a";
    }
  },
};
</script>

<style scoped></style>
