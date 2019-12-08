<template>
  <div>
    <h2>Create movie</h2>
    <input v-model="title" placeholder="Title">
    <input v-model="duration" placeholder="Duration">
    <button @click="createMovie">Create</button>
    <router-link to="/">Back</router-link>
  </div>
</template>

<script>
  export default {
    name: "CreateMovie",
    data() {
      return {
        title: '',
        duration: ''
      }
    },
    methods: {
      createMovie() {
        const movie = {
          title: this.title,
          duration: this.duration
        }
        this.$store.dispatch('addMovie', movie)
        this.$router.push('/')
      }
    },
    beforeRouteLeave (to, from, next) {
      if (this.title !== '' || this.duration !== '') {
        this.$dialog.confirm('Are you sure you want to leave the page?')
          .then(function () {
            next()
          })
          .catch(function () {
            next(false)
          })
      } else {
        next()
      }
    }
  }
</script>

<style scoped>

</style>
