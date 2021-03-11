import { mapGetters } from "vuex";
import Flip from '../animations/Flip';

export default {
  name: "Films",
  methods: {},
  computed: {
    ...mapGetters(["getFilteredFilms","getInput"]),
  },
  components: {
    Flip
  }
};