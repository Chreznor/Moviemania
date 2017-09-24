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
    <md-button class="md-raised md-primary" @click="updateMovie">Save Edit</md-button>
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
      updateMovie: function() {
        console.log(this.movieId, this.propTitle)
        this.$store.dispatch('updateMovie', {title: this.propTitle, date: this.propDate, desc: this.propDesc, id: this.movieId});
      }
    }
    // ,
    // computed: {
    //   elemData: function() {
    //     let newTitle = this.title
    //     let newDate = this.date
    //     let newDesc = this.desc
    //     this.elementData = [newTitle, newDate, newDesc]
    //   return this.elementData
    //   }
    // }
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
