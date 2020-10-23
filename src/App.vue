<template>
  <div id="app">
    <Add></Add>
    <Minus></Minus>
    <p>========================================================================</p>
    <Count1></Count1>
    <Count2></Count2>
  </div>
</template>

<script>
import Add from './components/Add'
import Minus from './components/Minus'
import Count1 from './components/Count1'
import Count2 from './components/Count2'

export default {
  name: 'App',
  components: {
    Add,
    Minus,
    Count1,
    Count2
  }
}
</script>

<style></style>
