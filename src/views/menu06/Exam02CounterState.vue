<template>
  <div class="card">
    <div class="card-header">
      Exam01RootState
    </div>
    <div class="card-body">
      <h6>[Counter State Read]</h6>
      <p>counter/count 단방향 바인딩 : {{ $store.state.counter.count }}</p>
      <p>counter/count 단방향 바인딩 : {{ $store.getters["counter/getCount"]}}</p>
      <p>counter/count 단방향 바인딩 : {{ getCount() }}</p>
      <p>counter/count 단방향 바인딩 : {{ computedCount }}</p>
      <p>
        counter/count 양방향 바인딩 :
        <input type="text" v-model.number="$store.state.counter.count" />
      </p>

      <hr />
      <h6>[Counter State 변경]</h6>
      <p>Component value 양방향 바인딩 : <input type="text" v-model.number="value" /></p>
      <div class="mt-2">
        <button class="btn-info btn-sm btn mr-2" @click="changeCountByMutation">
          counter/count update(mutation sync)
        </button>
        <button class="btn-info btn-sm btn" @click="changeCountByAction">
          counter/count update(action async)
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Exam01RootState",
  components: {},
  data: () => ({
    value: 0,
  }),
  methods: {
    getCount() {
      //return this.$store.state.counter.count;
      console.log(this.$store.getters);
      return this.$store.getters["counter/getCount"];
    },
    changeCountByMutation() {
      this.$store.commit("counter/setCount", this.value);
    },
    changeCountByAction() {
      this.$store.dispatch("counter/setCountAsync", { value: this.value, duration: 3000 });
    },
  },
  computed: {
    computedCount() {
      return this.$store.getters["counter/getCount"];
    },
  },
};
</script>

<style scoped></style>
