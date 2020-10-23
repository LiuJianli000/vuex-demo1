<template>
  <div id="app">
    <Add></Add>
    <Minus></Minus>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Add from './components/Add'
import Minus from './components/Minus'

export default {
  name: 'App',
  components: {
    Add,
    Minus
  }
}
</script>

<style></style>
