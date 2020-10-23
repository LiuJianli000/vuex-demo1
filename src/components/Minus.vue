<template>
  <div class="mis">
    <h3>{{ showCount }}</h3>
    <button @click="handleMinus(1)">-1</button>{{' '}}
    <button @click="handleMinus(10)">-10</button>{{' '}}
    <button @click="handleMinusAc(1)">async -1</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    // A 第二种方式使用 store, 把 store 里的 state 映射到组件的 computed 中
    ...mapState(['count']),
    // E 第二种使用 getter 的方法
    ...mapGetters(['showCount'])
  },
  methods: {
    // C 第二种方法调用 store 中的 mutations 的方法, 把 store 里的 mutations 映射到组件的 methods 中
    ...mapMutations(['minus']),
    ...mapActions(['minusAc']),
    handleMinus: function (num) {
      this.minus(num)
    },
    handleMinusAc: function (num) {
      this.minusAc(num)
    }
  }
}
</script>

<style scoped>
.mis {
  border: 1px solid red;
  padding: 10px;
  margin-top: 10px;
}
</style>
