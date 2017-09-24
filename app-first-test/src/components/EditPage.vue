<template>

  <md-layout md-align="center" md-column>
      <md-layout  md-flex="80" class="border" md-align="center">
        <md-layout class="edit-container">
          <edit-element :title="getMovie[0].title" :desc="getMovie[0].overview" :date="getMovie[0].release_date" :img="getMovie[0].backdrop_path" :movieId="getMovie[0].id"></edit-element>
          <md-button v-on:click="changeTitle">Save Edit</md-button>
        </md-layout>
      </md-layout>
      {{this.$store.state.movies[0].title}}
      {{this.$store.state.count}}
      {{this.$route.params.movieId}}
      {{getMovie[0].title}}
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
    methods: {
      changeTitle: function () {
        this.$store.dispatch('changeTitle', this.getMovie[0].title);
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



  /*.border {
    border-left: 1px solid black;
    border-right: 1px solid black;
  }*/

  .md-title {
    font-size: 32px;
  }

  .edit-container {
    max-width: 400px;
  }

  ul:not(.md-list) > li + li {
    margin: 0 0 20px 0;
  }


  ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 0;
  }

  li {
    list-style: none;
    flex-basis: 29%;
    margin-bottom: 20px;
  }

</style>
