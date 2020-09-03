<template>
  <div class="home">
    <b-container>
      <b-row class="Cardrow">
        <job-card
          v-for="job in dispalyjob"
          :key="job.id"
          :data="job"
        ></job-card>
      </b-row>

      <!-- Use text in props -->
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        first-text="First"
        prev-text="Prev"
        next-text="Next"
        last-text="Last"
        @input="paginate(currentPage)"
      ></b-pagination>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import JobCard from "../components/JobCard";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    JobCard,
  },
  data() {
    return {
      currentPage: 1,
      perPage: 3,
    };
  },
  computed: {
    ...mapGetters(["jobs", "dispalyjob", "rows"]),
  },
  methods: {
    async fetchData() {
      await this.$store.dispatch("fetchJobs");
    },
    paginate(currentPage) {
      this.$store.dispatch("pagination", {
        currentPage,
        perPage: this.perPage,
      });
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style lang="scss" scoped>
.Cardrow {
  margin: 50px 0 30px 0;
  justify-content: center;
  align-content: center;
}
</style>
