<template>
  <div class="add">
    <!-- A 第一种方式获取 store 中 state 的方法 -->
    <!-- <h3>Count: {{ $store.state.count }}</h3> -->
    <!-- E 第一种使用 getter 的方法 -->
    <h3>{{ $store.getters.showCount }}</h3>
    <button @click="handleAdd(1)">+1</button>{{' '}}
    <button @click="handleAdd(10)">+10</button>{{' '}}
    <button @click="handleAddAc(1)">async +1</button>
  </div>
</template>

<script>

export default {
  data () {
    return {}
  },
  methods: {
    handleAdd: function (num) {
      // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      // B 第一种修改 store 中 state 的方法
      // 这是一种危险的写法,每个组件都直接修改 store 的值?!!!
      // this.$store.state.count++
      // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

      // B 第二种修改 store 中 state 的方法
      // C 第一种调用 store 中的 mutations 的方法, 使用 commit
      this.$store.commit('add', num)
    },
    handleAddAc: function (num) {
      // D 第一种调用 store 中的 actions 的方法, 使用 dispatch
      this.$store.dispatch('addAc', num)
    }
  }
}
</script>

<style scoped>
.add {
  display: inline-block;
  border: 1px solid red;
  padding: 10px;
  width: 400px;
}
</style>
