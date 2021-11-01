<template>
    <modal-dialog-tempate>
        <template v-slot:header> <!-- header slot에 지금 태그의 내용을 추가 -->
            DialogA
        </template>
        <template v-slot:body>
            <p>DialogA 내용</p>
        </template>
        <template v-slot:footer>
            <button class="btn btn-info btn-sm" @click="$emit('close')">확인</button>
            <button class="btn btn-info btn-sm" @click="$emit('close')">닫기</button>
        </template>
    </modal-dialog-tempate>
</template>

<script>
import ModalDialogTempate from "@/components/menu02/ModalDialogTemplate.vue"

export default {
    name : "DialogA",
    components: {
        ModalDialogTempate
    },
    data: () => ({

    }),
    methods: {
    }
};
</script>

<style scoped>

</style>
