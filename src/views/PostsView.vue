<script lang="ts">
import {defineComponent} from "vue";
import PostsList from "@/components/PostsList.vue";
import PageTitle from "@/views/PageTitle.vue";

export default defineComponent({
  name: "posts-view",
  components: {PageTitle, PostsList}

});
</script>

<template>
  <div class="post-view">
    <page-title/>
  <posts-list></posts-list>
  </div>
</template>

<style lang="sass" scoped>
  .post-view
    margin-top: 3rem
</style>