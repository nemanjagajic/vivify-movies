<template>
  <div @click="openMovie" class="container">
    <h2>{{ movie.title }}</h2>
    <div>{{ movie.duration }}</div>
  </div>
</template>

<script>
  export default {
    name: "Movie",
    props: {
      movie: Object
    },
    methods: {
      openMovie() {
        this.$router.push({
          path: `/movies/${this.movie.title}`,
          query: { duration: this.movie.duration }
        })
      }
    }
  }
</script>

<style scoped>
 .container {
   border: 1px solid lightgray;
   border-radius: 10px;
   width: 300px;
   padding: 20px;
   margin: 10px;
   cursor: pointer;
 }
</style>
