<template>

  <md-layout md-align="center" md-column>
      <md-layout  md-flex="80" class="border" md-align="center">
        <md-layout class="edit-container">
          <edit-element :title="getMovie[0].title" :desc="getMovie[0].overview" :date="getMovie[0].release_date" :img="getMovie[0].backdrop_path" :movieId="getMovie[0].id"></edit-element>
        </md-layout>
      </md-layout>
  </md-layout>

</template>

<script>
  import EditElement from './EditElement'
  import axios from 'axios';
  export default {
    components: {
      EditElement
    },
    name: 'edit-page',
    props: [],
    data () {
      return {
        movies: [],
      }
    },
    computed: {
      getMovie () {
        return this.$store.state.movies.filter(movie => movie.id === parseFloat(this.$route.params.movieId))
      }
    }

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
    font-size: 32px;
  }

  .edit-container {
    max-width: 400px;
  }

</style>
