<template>
  <div>
    <div v-if="getInput.length >= 3 || getInput.length ==0" class="row">
      <div
        v-for="item in getFilteredFilms"
        :key="item.id"
        class="card col-md-6"
      >
        <div class="card-header">
          {{ item.title }}
          <p>Available: {{ item.available }}</p>
        </div>
        <div class="card-body">
          <p class="card-text">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
    <div v-if="getFilteredFilms.length == 0" class="alert alert-danger">
      No s'ha trobat cap pelicula
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Films",
  methods: {},
  computed: {
    ...mapGetters(["getFilms", "getFilteredFilms", "getAvailable", "getInput"]),
  },
};
</script>

<style scoped>
.card {
  margin-top: 20px;
  padding: 0px;
}
.alert {
  margin-top: 20px;
}
</style>