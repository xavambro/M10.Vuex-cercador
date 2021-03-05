<template>
  <div class="container">
    <div v-for="item in getFilms" :key="item.id" class="card">
      <div class="card-header">{{item.title }} Available: {{item.available}}</div>
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
  methods: {},
  computed: {
    ...mapGetters(["getFilms"]),
  },
};
</script>