<template>
  <div class="card">
    <div class="card-header">
        Child
    </div>
    <div class="card-body">
        data : {{data}}
    </div>
  </div>
</template>

<script>
export default {
  name: "Child",
  components: {},
  data: () => ({
     
  }),
  methods: {},
  props : [
    "data"
  ],
  beforeUpdate() {
    console.log("child beforeUpdate state");
  },
  updated() {
    // 데이타 변경 시 => 렌더링이 다시 일어남
    console.log("child updated state");
  },
};
</script>

<style scoped></style>
