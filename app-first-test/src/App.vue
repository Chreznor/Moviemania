<template>
  <div id="app">
    <layout></layout>
    <router-view></router-view>
  </div>
</template>

<script>
import Layout from './components/Layout'
export default {
  components: {
    Layout
  },
  name: 'app'
}
</script>

<style scoped>

body, * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
