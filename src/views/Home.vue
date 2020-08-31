<template>
  <div class="home">
    <b-container>
      <b-row class="Cardrow">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </b-row>
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
};
</script>
<style lang="scss" scoped>
.Cardrow {
  margin: 50px 0 30px 0;
  justify-content: center;
  align-content: center;
}
</style>
