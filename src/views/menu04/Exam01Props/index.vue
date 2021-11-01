<template>
  <div class="card">
    <div class="card-header">
        Exam01Props
    </div>
    <div class="card-body"> <!-- camel 또는 kebab 형식으로 표현 -->
        <child-a :prop1="data1" prop2="val2" productKind="bag" product-no="1" :productPrice="100000" />
        <hr/>
        <child-b :product="p_object" v-bind="p_object2"/>
        <hr/>
        <child-c propD="문자열" :propA="3" :propB="5" :propC="1" :propF="{message : 'hi vue'}"
            :propG="['red','white']" :propI="-13"/>
    </div>
  </div>
</template>

<script>
import ChildA from './ChildA.vue';
import ChildB from './ChildB.vue';
import ChildC from './ChildC.vue';


export default {
    name : "Exam01Props",
    components: {
        ChildA,
        ChildB,
        ChildC 
    },

    data: () => ({
        data1 : "val1",
        p_object : {
            no : 23,
            kind : "suit"
        },
        p_object2 : {
            no : 7,
            kind : "bag"
        },

    }),
    methods: {
    }
};
</script>

<style scoped>

</style>
