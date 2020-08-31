<template>
  <div class="job-card">
    <b-col>
      <b-card
        title=" This is a Card Title"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        bg-variant="light"
      >
        <b-card-text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </b-card-text>
        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </b-col>
  </div>
</template>

<script>
export default {
  name: "JobCard",
  props: {
    msg: String,
  },
};
</script>
<style lang="scss" scoped>
.job-card {
  padding-bottom: 25px;
}
</style>
