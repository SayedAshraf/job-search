<template>
  <div id="app">
    <!-- Spinner -->
    <div class="page" v-if="showSpinner">
      <b-spinner class="spinner" variant="primary" key="primary"></b-spinner>
    </div>
    <!-- Navbar -->
    <JobNavBar />
    <router-view />
  </div>
</template>
<script>
import JobNavBar from "./components/JobNavBar";
import { mapGetters } from "vuex";

export default {
  components: {
    JobNavBar,
  },
  computed: {
    ...mapGetters(["showSpinner"]),
  },
};
</script>
<style lang="scss">
.page {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 25;
  background: rgba(0, 0, 0, 0.3);
  .spinner {
    position: relative;
    top: 50%;
    left: 50%;
  }
}
</style>
