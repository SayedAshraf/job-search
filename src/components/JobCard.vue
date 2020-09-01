<template>
  <div class="job-card">
    <b-col>
      <b-card
        :title="data.id + '-' + data.title"
        :img-src="data.image"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        bg-variant="light"
      >
        <b-card-text>
          {{ data.description }}
        </b-card-text>
        <b-button href="#" variant="primary">Apply</b-button>
      </b-card>
    </b-col>
  </div>
</template>

<script>
export default {
  name: "JobCard",
  props: {
    data: {
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.job-card {
  padding-bottom: 25px;
}
</style>
