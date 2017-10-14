<template>
  <md-card md-with-hover>
    <md-card-header>

      <md-card-header-text>
        <div class="md-title">{{title}}</div>
        <div class="md-subhead">{{date}}</div>
      </md-card-header-text>

      <md-menu md-size="4" md-direction="bottom left">
        <md-button class="md-icon-button md-primary" md-menu-trigger>
          <md-icon>more_vert</md-icon>
        </md-button>

        <md-menu-content>
          <md-menu-item @selected="$router.push({ path: 'edit-page/' + movieId })">
            <span>Edit Info</span>
            <md-icon class="md-primary">edit</md-icon>
          </md-menu-item>

          <md-menu-item :href="'http://www.themoviedb.org/movie/' + movieId">
            <span>View on MovieDB</span>
            <md-icon class="md-primary">info</md-icon>
          </md-menu-item>
        </md-menu-content>
      </md-menu>

    </md-card-header>

    <md-card-media md-ratio="4:3">
      <img :src="'http://image.tmdb.org/t/p/w500//' + img" alt="Poster">
    </md-card-media>

    <md-card-content>
      {{desc.length > 150 ? desc.substring(0, 150) + '...'  : desc}}
    </md-card-content>
  </md-card>

</template>

<script>
  export default {
    name: 'list-element',
    props: ['title', 'date', 'img', 'desc', 'movieId'],
    data () {
      return {}
    }


  }
</script>

<style scoped>

  .md-card {
    max-height: 600px;
    overflow: hidden;
  }

  a:not(.md-button) {
    color: white;
  }

  a:not(.md-button):hover {
    text-decoration: none;
    color: white;
  }

  .border {
    border-left: 1px solid black;
    border-right: 1px solid black;
  }

  .md-title {
    overflow: hidden;
    height: 30px;
    font-size: 20px;
  }

</style>
