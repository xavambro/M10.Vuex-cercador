import { mapGetters } from "vuex";

export default {
  name: "Films",
  methods: {},
  computed: {
    ...mapGetters(["getFilteredFilms","getInput"]),
  },
};