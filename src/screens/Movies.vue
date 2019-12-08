<template>
  <div>
    <h2>Movies</h2>
    <router-link to="/createMovie">Create movie</router-link>
    <div v-for="movie in movies" :key="movie.title">
      <Movie :movie="movie" />
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Movie from "../components/Movie"

  export default {
    name: "Movies",
    components: {Movie},
    computed: {
      ...mapGetters([
        'movies',
      ])
    }
  }
</script>
