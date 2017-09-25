<template>
  <md-card>
    <md-card-header>
      <md-input-container>
        <label>Title</label>
        <md-input v-model="propTitle"></md-input>
        <div class="md-subhead">{{movieId}}</div>
      </md-input-container>

      <md-input-container>
        <label>Release Date</label>
        <md-input v-model="propDate"></md-input>
      </md-input-container>
    </md-card-header>

    <md-card-media md-ratio="4:3">
      <img :src="'http://image.tmdb.org/t/p/w500//' + img" alt="Poster">
    </md-card-media>
    <md-input-container>
      <label>Overview</label>
      <md-textarea v-model="propDesc"></md-textarea>
    </md-input-container>

    <md-dialog md-open-from="#custom" md-close-to="#custom" ref="save-movie">
      <md-dialog-title>The Edit Has Been Saved</md-dialog-title>

      <md-dialog-content>Return to the home page?</md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click="closeDialog('save-movie')">Cancel</md-button>
        <md-button class="md-primary" href="#/">Ok</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-button class="md-raised md-primary" id="custom" @click="updateMovie('save-movie')">Save Edit</md-button>
  </md-card>
</template>

<script>
  export default {
    name: 'edit-element',
    props: ['title', 'date', 'img', 'desc', 'movieId'],
    data () {
      return {
        propTitle: this.title,
        propDate: this.date,
        propDesc: this.desc,
      }
    },
    methods: {
      updateMovie(ref) {
        this.$refs[ref].open();
        this.$store.dispatch('updateMovie', {title: this.propTitle, date: this.propDate, desc: this.propDesc, id: this.movieId});
      },
      closeDialog(ref) {
        this.$refs[ref].close();
      }
    }
  }
</script>

<style scoped>

  .md-card {
    max-height: 800px;
    margin-top: 50px;
    min-width: 400px;
    overflow: hidden;
  }

  .md-card-media {
    height: 200px;
  }

  .md-input-container {
    padding: 15px 20px 0 15px;
  }

  a:not(.md-button) {
    color: white;
  }

  a:not(.md-button):hover {
    text-decoration: none;
    color: white;
  }

</style>
