<template>
  <md-layout md-align="center">
      <md-layout  md-flex="80" class="border" md-align="center">
        <md-layout>
          <ul>
            <li v-for="movie in this.$store.state.movies">
              <list-element :title="movie.title" :desc="movie.overview" :date="movie.release_date" :img="movie.backdrop_path" :movieId="movie.id"></list-element>
            </li>
          </ul>
        </md-layout>
      </md-layout>
  </md-layout>

</template>

<script>
  import ListElement from './ListElement'
  export default {
    components: {
      ListElement
    },
    name: 'main-container',
    props: [],
    data () {
      return {
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

  @media (max-width: 900px) {
      li {
      flex-basis: 40%;
      margin-bottom: 40px;
    }
  }

  @media (max-width: 600px) {
      li {
      flex-basis: 70%;
      margin-bottom: 40px;
    }
  }


</style>
