<template>
  <div>
    <h2>{{ this.$route.params.title }}</h2>
    <div>{{ this.$route.query.duration }}</div>
    <router-link to="/">Go Back</router-link>
  </div>
</template>

<script>
  export default {
    name: "MovieDetails"
  }
</script>

<style scoped>

</style>
