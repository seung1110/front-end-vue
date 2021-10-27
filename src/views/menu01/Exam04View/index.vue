<template>
  <div class="card">
    <div class="card-header">
      Exam04View
    </div>
    <div class="card-body">
      <router-view class="mb-2"></router-view>
      <router-view name="rv1" class="mb-2"></router-view>
      <router-view name="rv2"></router-view>

      <hr />

      <sub-a-component />
      <sub-b-component />
      <sub-c-component />
    </div>
  </div>
</template>

<script>
import SubBComponent from "@/components/menu01/SubBComponent.vue";
import SubAComponent from "@/components/menu01/SubAComponent.vue";
import SubCComponent from "@/components/menu01/SubCComponent.vue";
export default {
  name: "Exam04View",
  components: {
    SubAComponent,
    SubBComponent,
    SubCComponent,
  },
  data: () => ({}),
  methods: {},
};
</script>

<style scoped></style>
