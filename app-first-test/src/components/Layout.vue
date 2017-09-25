<template>
  <md-whiteframe md-elevation="2">
    <md-toolbar class="md-medium">
      <router-link to="/"><h1 class="md-title" style="flex: 1">MovieMania</h1></router-link>
    </md-toolbar>
  </md-whiteframe>
</template>

<script>
  export default {
    name: 'layout',
    data () {
      return {}
    },
    props: [],
  }
</script>

<style scoped>

  a:not(.md-button) {
    color: white;
  }

  a:not(.md-button):hover {
    text-decoration: none;
    color: white;
  }

  .md-title {
    font-size: 48px;
    font-family: 'Libre Barcode 39 Text', cursive;
  }
</style>
