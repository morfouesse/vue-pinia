<script lang="ts">
import {defineComponent} from "vue";
import PostsList from "@/components/PostsList.vue";

export default defineComponent({
  name: "posts-view",
  components: {PostsList}
});
</script>

<template>
  <posts-list></posts-list>
</template>

<style scoped>

</style>