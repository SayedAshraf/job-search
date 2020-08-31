<template>
  <div id="app">
    <JobNavBar />
    <router-view />
  </div>
</template>
<script>
import JobNavBar from "./components/JobNavBar";
export default {
  components: {
    JobNavBar,
  },
};
</script>
<style lang="scss"></style>
