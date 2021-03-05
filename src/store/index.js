import Vue from "vue";
import Vuex from "vuex";
import films from '../assets/films.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {films},
  getters:{
    getFilms (state) {
      return state.films
    }
    
  },
  mutations: {},
  actions: {},
  modules: {}
});
