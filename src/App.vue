<template>
  <div id="app">
    <h1>Buscador Vuex</h1>
    <Search></Search>
    <Films></Films>
  </div>
</template>

<script>
import Films from "./components/Films.vue";
import Search from "./components/Search.vue";

export default {
  name: "App",
  components: {
    Films,
    Search
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
