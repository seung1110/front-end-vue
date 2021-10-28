<template>
  <div class="card">
    <div class="card-header">
        Exam07View
    </div>
    <div class="card-body">
        <div>kind : {{kind}}</div>
        <div>color : {{color}}</div>
    </div>
  </div>
</template>

<script>
export default {
    name : "Exam07View",
    components: {
    },
    data: () => ({

    }),
    methods: {
    },
    props: [
        "kind",
        "color"
    ]
};
</script>

<style scoped>

</style>
