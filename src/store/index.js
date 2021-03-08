import Vue from "vue";
import Vuex from "vuex";
import films from '../assets/films.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {films,
          input:'',
          availability: true
        },
  getters:{
    getFilms (state) {
      return state.films
    },
    getINput (state) {
      return state.input
    },
    getAvailability(state){
      return state.availability
    },
    getFilteredFilms (state){
      return state.films.filter( film => film.title.toUpperCase().includes(state.input.toUpperCase()) && !film.available)
    },
    getAvailable (state){
      return state.films.filter(film => film.available)

    },
    getNotAvailable (state){
      return state.films.filter(film => !film.available)

    }
  },
  mutations: {
    addInput (state, inp){
      state.input = inp;
    },
    changeAvailability (state, available ){
      state.availability = available

    },
    
  },
  actions: {},
  modules: {}
});
