<template>
  <md-card>
    <md-card-header>
      <md-input-container>
        <label>Title</label>
        <md-input v-model="title"></md-input>
      </md-input-container>

      <md-input-container>
        <label>Release Date</label>
        <md-input v-model="date"></md-input>
      </md-input-container>

      <!-- <md-card-header-text>
        <div class="md-title" v-model="titleValue" contenteditable="true">{{title}}</div>
        <div class="md-subhead" contenteditable="true">{{date}}</div>
      </md-card-header-text>

      <md-menu md-size="4" md-direction="bottom left">
        <md-button class="md-icon-button" md-menu-trigger>
          <md-icon>more_vert</md-icon>
        </md-button>

        <md-menu-content>
          <md-menu-item @selected="$router.push({ path: 'edit-page/' + movieId })">
            <md-menu-item @selected="$router.push({ name: 'Account' })">Account</md-menu-item>
            <span>Edit Info</span>
            <md-icon>edit</md-icon>
          </md-menu-item>

          <md-menu-item :href="'http://www.themoviedb.org/movie/' + movieId">
            <span>View on MovieDB</span>
            <md-icon>info</md-icon>
          </md-menu-item>
        </md-menu-content>

      </md-menu> -->
    </md-card-header>

    <md-card-media md-ratio="4:3">
      <img :src="'http://image.tmdb.org/t/p/w500//' + img" alt="Poster">
    </md-card-media>

    <md-input-container>
      <label>Overview</label>
      <md-textarea v-model="desc"></md-textarea>
    </md-input-container>
    <!-- <md-card-content contenteditable="true">
      {{desc}}
    </md-card-content> -->
  </md-card>


</template>

<script>
  export default {
    name: 'edit-element',
    props: ['title', 'date', 'img', 'desc', 'movieId'],
    data () {
      return {
        titleValue: ''
      }
    }
    // ,
    // computed: {
    //   titleValue() {
    //     console.log(this.$el)
    //   }
    // }


  }
</script>

<style scoped>

  .md-card {
    max-height: 600px;
    margin-top: 50px;
    min-width: 400px;
    overflow: hidden;
  }

  .md-card-media {
    height: 200px;
  }

  a:not(.md-button) {
    color: white;
  }

  a:not(.md-button):hover {
    text-decoration: none;
    color: white;
  }

</style>
