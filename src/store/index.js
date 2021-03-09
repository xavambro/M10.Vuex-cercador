import Vue from "vue";
import Vuex from "vuex";
import films from '../assets/films.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {films,
          input:'',
          availability:''
        },
  getters:{
    getFilms (state) {
      return state.films
    },
    getInput (state) {
      return state.input
    },
    getAvailability(state){
      return state.availability
    },
    getFilteredFilms (state){
      if (state.availability == "available")
      return state.films.filter( film => film.title.toUpperCase().includes(state.input.toUpperCase())).filter( film => film.available)
      else if(state.availability == "notavailable"){
        return state.films.filter( film => film.title.toUpperCase().includes(state.input.toUpperCase())).filter( film => !film.available)
 
      }else{
        return state.films.filter( film => film.title.toUpperCase().includes(state.input.toUpperCase()))
      }

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
