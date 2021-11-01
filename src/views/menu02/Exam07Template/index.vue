<template>
  <div class="card">
    <div class="card-header">
        Exam07Template
    </div>
    <div class="card-body">
        <button class="btn btn-info btn-sm mr-2" @click="modalDialogTemplateFlag = true">show modal</button>
        <button class="btn btn-info btn-sm mr-2" @click="dialogAFlag = true">show dialogA</button>
        <button class="btn btn-info btn-sm mr-2" @click="dialogBFlag = true">show dialogB</button>
    </div>
        <modal-dialog-template v-if="modalDialogTemplateFlag"  
            @close="modalDialogTemplateFlag = false"/> <!-- ModalDialogTempate component에서 emit하는 이벤트인 close 발생 시 실행-->
        <dialog-a v-if="dialogAFlag" @close="dialogAFlag=false"/>
        <dialog-b v-if="dialogBFlag" @close="dialogBFlag=false"/>
  </div>
</template>

<script>
import ModalDialogTemplate from "@/components/menu02/ModalDialogTemplate"
import DialogA from './DialogA.vue';
import DialogB from './DialogB.vue';

export default {
    name : "Exam07Template",
    components: {
        ModalDialogTemplate,
        DialogA,
        DialogB
    },
   
    data: () => ({
        modalDialogTemplateFlag : false,
        dialogAFlag : false,
        dialogBFlag : false
    }),
    methods: {  }
};
</script>

<style scoped>

</style>
