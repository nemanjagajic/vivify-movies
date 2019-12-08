export default {
  state: {
    movies: []
  },
  getters: {
    movies: state => state.movies
  },

  mutations: {
    ADD_MOVIE: (state, movie) => {
      state.movies.push(movie)
    }
  },

  actions: {
    addMovie: ({ commit }, movie) => {
      commit('ADD_MOVIE', movie)
    }
  },
}
