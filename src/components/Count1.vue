<template>
  <div class="count1">
    <!-- <h3>store count: {{ $store.state.count1.count }}</h3> -->
    <h3>{{ $store.getters['count1/showCount'] }}</h3>
    <button @click="handleAdd(1)">+1</button>{{' '}}
    <button @click="handleMinus(1)">-1</button>{{' '}}
    <button @click="handleAddAc(1)">async +1</button>
  </div>
</template>

<script>
export default {
  name: 'Count1',
  data: () => ({
    msg: 'hello'
  }),
  computed: {
  },
  methods: {
    handleAdd: function (num) {
      const { commit } = this.$store

      commit('count1/add', num)
    },
    handleMinus: function (num) {
      const { commit } = this.$store

      commit('count1/minus', num)
    },
    handleAddAc: function (num) {
      const { dispatch } = this.$store

      dispatch('count1/addAc', num)
    }
  }
}
</script>

<style scoped>
.count1 {
  display: inline-block;
  border: 1px solid blue;
  padding: 10px;
  width: 400px;
}
</style>
