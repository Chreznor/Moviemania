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
  name: 'app',
  mounted() {
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=d85a4cb9cc02218651b1548b20f1fb7d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
      .then(res => {
        const localStorageRef = localStorage.getItem('movies');
        if (localStorageRef) {
          this.$store.dispatch('loadMovies', JSON.parse(localStorageRef))
        } else {
          this.$store.dispatch('loadMovies', res.data.results)
        }
      })
      .catch(e => {
        console.log(e);
    })
  }
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
