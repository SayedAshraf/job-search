<template>
  <div class="job-card">
    <b-col>
      <b-card
        v-b-modal="`modal+${data.id}`"
        :title="data.id + '-' + data.title"
        :img-src="data.image"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        bg-variant="light"
      >
        <b-card-text> {{ data.description }} </b-card-text>      
        <b-button href="#" variant="primary" v-b-tooltip.hover title="Apply Here">Apply</b-button>
        
        <!-- Card Model by ID -->
        <b-modal :id="`modal+${data.id}`" title="Apply Here Info!">
          <p class="my-4">You Can Apply Here!...</p>
        </b-modal>

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
