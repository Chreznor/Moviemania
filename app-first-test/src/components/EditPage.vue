<template>

  <md-layout md-align="center">
    {{this.$store.state.count}}
    <md-button v-on:click="incr">adsaddsd</md-button>
      <md-layout  md-flex="80" class="border" md-align="center">
        <md-layout>
          <ul>
            <li md-flex v-for="movie in movies">
              <h1>Hello</h1>
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
        movies: [],
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9]
      }
    },
    methods: {
      incr: function () {
        this.$store.dispatch('increment');
      }
    },
    created: function() {
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=d85a4cb9cc02218651b1548b20f1fb7d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
      .then(res => this.movies = res.data.results)
      .catch(e => {
      console.log(e);
    })

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
