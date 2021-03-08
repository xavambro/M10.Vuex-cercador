<template>
  
    <div class="row">
    <div v-for="item in getFilteredFilms" :key="item.id" class="card col-md-6">
      <div class="card-header">{{item.title }} 
        <p>Available: {{item.available}}</p>
      </div>
      <div class="card-body">
        <p class="card-text">
{{item.description}}        </p>
      </div>
    </div>
    </div>
  
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Films",
  methods:{},
  computed: {
    ...mapGetters(["getFilms","getFilteredFilms","getAvailable","getInput"]),
  },
};
</script>

<style scoped>
  .card{
    margin-top:20px;
    padding:0px
  }
</style>