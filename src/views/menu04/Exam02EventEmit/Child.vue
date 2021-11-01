<template>
  <div class="card">
    <div class="card-header">
        Child
    </div>
    <div class="card-body">
      <h6>[자식 -> 부모]</h6>
      <button class="btn btn-info btn-sm mr-2" @click="handleBtn1">child-event-1 emit</button>
      <button class="btn btn-info btn-sm mr-2" @click="handleBtn2">child-event-2 emit</button>
      <hr/>
       <h6>[부모(0) -> 자식(0, 10 증가 요청) -> 부모(10) -> 자식]</h6>
       <p class="mb-2">부모로부터 받은 counter : {{counter}}</p>
       <button class="btn btn-info btn-sm mr-2" @click="handleBtn3">증가 요청</button>
       <button class="btn btn-info btn-sm mr-2" @click="handleBtn4">감소 요청</button>

    </div>
  </div>
</template>

<script>
export default {
    name : "Child",
    components: {
    },
    data: () => ({
      data1 : "child-value1",
      data2 : 100
    }),
    methods: {
      handleBtn1(){
        //event 발생
        this.$emit("child-event-1", this.data1 ); // event명, data
      },
      handleBtn2(){
        //event 발생
        this.$emit("child-event-2", this.data1 , this.data2 ); // event명, data
      },
      handleBtn3(){
        this.$emit("counter-increment", 10 ); // event명, data
      },
      handleBtn4(){
        this.$emit("counter-decrease", 10 ); // event명, data
      }
    }, props : [
      "counter"
    ]
};
</script>

<style scoped>

</style>
