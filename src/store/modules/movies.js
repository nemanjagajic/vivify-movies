export default {
  state: {
    movies: []
  },
  getters: {
    movies: state => state.movies
  },

  actions: {
    addMovie: ({ commit }, movie) => {
      commit('ADD_MOVIE', movie)
    }
  },

  mutations: {
    ADD_MOVIE: (state, movie) => {
      state.movies.push(movie)
    }
  }
}
