<template>
  <div class="card">
    <div class="card-header">
      ChildC
    </div>
    <div class="card-body">
      <p>provideData1 : {{ provideData1 }}</p>
      <p>provideData2 : {{ provideData2 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChildC",
  components: {},
  data: () => ({}),
  methods: {},
  inject: [
    //조상으로부터 전달된 데이터 삽입
    "provideData1", // provide에서 설정한 변수명을 값으로 추가
    "provideData2",
  ],
};
</script>

<style scoped></style>
