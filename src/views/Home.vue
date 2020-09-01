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

export default {
  name: "Home",
  components: {
    JobCard,
  },
  data() {
    return {
      jobs: {},
      dispalyjob: {},
      currentPage: 1,
      rows: 1,
      perPage: 3,
    };
  },
  methods: {
    async fetchData() {
      const res = await fetch("jobs.json");
      const val = await res.json();
      this.jobs = val;
      this.dispalyjob = val.slice(0, this.perPage);
      this.rows = this.jobs.length;
    },
    paginate(currentPage) {
      const start = (currentPage - 1) * this.perPage;
      this.dispalyjob = this.jobs.slice(start, start + this.perPage);
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
