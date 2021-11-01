<template>
  <div class="card">
    <div class="card-header">
        Exam02EventEmit
    </div>
    <div class="card-body">
      <p class="mb-2">counter : {{counter}}</p>
      <child @child-event-1="handleChildEvent1"
            @child-event-2="handleChildEvent2" :counter="counter"
            @counter-increment="handleChildEvent3"
            @counter-decrease="handleChildEvent4"/>
    </div>
  </div>
</template>

<script>
import Child from './Child.vue';

export default {
    name : "Exam02EventEmit",
    components: {
        Child
    },
    data: () => ({
      counter : 0
    }),
    methods: {
      handleChildEvent1(arg){
        console.log(arg);
      },
      handleChildEvent2(arg1, arg2){
        console.log(arg1 + ' , ' + arg2);
      },
      handleChildEvent3(val){
        this.counter += val;
      },
      handleChildEvent4(val){
        this.counter -= val;
      }
    }
};
</script>

<style scoped>

</style>
