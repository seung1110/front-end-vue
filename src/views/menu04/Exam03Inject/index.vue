<template>
  <div class="card">
    <div class="card-header">
        Exam03Inject
    </div>
    <div class="card-body">
        <p>data1 : {{data1}}</p>
        <p>data2 : {{data1}}</p>
        <button class="btn btn-sm btn-info mt-2" @click="changeData">변경</button>
        <hr/>
        <child-a/>
    </div>
  </div>
</template>

<script>
import ChildA from "./ChildA.vue"
export default {
    name : "Exam03Inject",
    components: {
        ChildA
    },
    data: () => ({
        data1 : "top-parent-data1",
        data2 : "top-parent-data2"

    }),
    methods: { 
        changeData(){
            this.data1 = "top-parent-data1-changed",
            this.data2 = "top-parent-data2-changed"
        }
       },
    provide() { // 함수 형태로 작성, 자손 컴포넌트가 사용할 수 있는 데이터 정의
        return {
            provideData1 : this.data1,
            provideData2 : this.data2,
        };
    }
};
</script>

<style scoped>

</style>
