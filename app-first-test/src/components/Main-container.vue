<template>
  <md-layout md-align="center">
      <md-layout  md-flex="80" class="border" md-align="center">
        <md-layout>
          <ul>
            <li md-flex v-for="movie in this.$store.state.movies">
              <list-element :title="movie.title" :desc="movie.overview" :date="movie.release_date" :img="movie.backdrop_path" :movieId="movie.id"></list-element>
            </li>
          </ul>
        </md-layout>
      </md-layout>
  </md-layout>

</template>

<script>
  import ListElement from './ListElement'
  import axios from 'axios';
  export default {
    components: {
      ListElement
    },
    name: 'main-container',
    props: [],
    data () {
      return {
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9]
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
