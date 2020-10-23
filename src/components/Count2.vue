<template>
  <div class="count1">
    <!-- <h3>store count: {{ count }}</h3> -->
    <h3>{{ showCount }}</h3>
    <button @click="handleAdd(1)">+1</button>{{' '}}
    <button @click="handleMinus(1)">-1</button>{{' '}}
    <button @click="handleMinusAc(1)">async -1</button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'

export default {
  name: 'Count2',
  data: () => ({
    msg: 'hello'
  }),
  computed: {
    // ...mapState('count1', {
    //   count: state => state.count
    // }),
    ...mapState('count2', ['count']),
    ...mapGetters('count2', ['showCount'])
  },
  methods: {
    ...mapMutations('count2', ['add', 'minus']),
    ...mapActions('count2', ['minusAc']),
    handleAdd: function (num) {
      this.add(num)
    },
    handleMinus: function (num) {
      this.minus(num)
    },
    handleMinusAc: function (num) {
      this.minusAc(num)

      this.sayHi()
    },
    sayHi: function (num) {
      console.log('hello')
    }
  }
}
</script>

<style scoped>
.count1 {
  display: inline-block;
  border: 1px solid blue;
  padding: 10px;
  margin-left: 10px;
  width: 400px;
}
</style>
