<template>
  <div class="card">
    <div class="card-header">
        ChildB
    </div>
    <div class="card-body">
      <p>product.no : {{product.no}}</p>
      <p>product.kind : {{product.kind}}</p>

      <p>no : {{no}}</p>
      <p>kind : {{kind}}</p>
    </div>
  </div>
</template>

<script>
export default {
    name : "ChildB",
    components: {
    },
    data: () => ({

    }),
    methods: {
    },
    props:[ "product",
      "no", "kind" // 객체 안에 있는 속성 명
     ] 
};
</script>

<style scoped>

</style>
