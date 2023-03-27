<script lang="ts">
import {defineComponent} from "vue";
import PageTitle from "@/components/PageTitle.vue";
import PostById from "@/components/PostById.vue";

export default defineComponent({
  name: "post-by-id-view",
  components: {PostById, PageTitle},

});
</script>

<template>
  <div class="post-view">
    <page-title title="les pooosts !"/>
    <div>
      <post-by-id></post-by-id>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.post-view
  margin-top: 3rem
</style>