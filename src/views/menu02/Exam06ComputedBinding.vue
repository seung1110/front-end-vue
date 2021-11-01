<template>
  <div class="card">
    <div class="card-header">
        Exam06ComputedBinding
    </div>
    <div class="card-body">
        <p>ssn1 : {{ssn1}}</p>
        <p>ssn2 : {{ssn2}}</p>
        <p>ssn : {{ssn1}}-{{ssn2.charAt(0)+"******"}}</p> <!-- rendering 시 매번 실행 => 성능 저하 -->
        <p>ssn : {{getSSN()}}</p>
        <p>ssn : {{computedSSN}}</p>
        <p>date : {{date}}</p>
        <button class="btn btn-info btn-sm mt-2" @click="changeData">변경</button>  
    </div>
  </div>
</template>

<script>
export default {
    name : "Exam06ComputedBinding",
    components: {
    },
    data: () => ({
        ssn1 : "001029",
        ssn2 : "3333333",
        date : new Date()
    }),
    methods: {
        getSSN(){
            console.log("getSSN run");
            const ssn = this.ssn1 + "-" + this.ssn2.charAt(0)+"******";
            return ssn;
        },
        changeData(){
            this.date = new Date();
            this.ssn2 = "4444444";
        }
    },
    computed : {
        computedSSN(){
            console.log("computedSSN run");
            const ssn = this.ssn1 + "-" + this.ssn2.charAt(0)+"******";
            return ssn;
        }
    }
};
</script>

<style scoped>

</style>
