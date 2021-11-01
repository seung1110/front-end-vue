<template>
  <div class="card">
    <div class="card-header">
      Child
    </div>
    <div class="card-body">
      <p>data1 : {{ data1 }}</p>
      <button class="btn btn-info btn-sm mr-2" @click="handleParentData">부모 데이터 읽기</button>
      <button class="btn btn-info btn-sm" @click="handleParentMethod">부모 method call</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Child",
  components: {},
  data: () => ({
    data1: "childData",
  }),
  methods: {
    childMehod() {
      console.log("childMehtod 실행");
    },
    handleParentData(){
        console.log(this.$parent.data1);
    },
    handleParentMethod(){
        this.$parent.parentMethod();
    }

  },
};
</script>

<style scoped></style>
