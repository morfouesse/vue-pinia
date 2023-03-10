<script lang="ts">
import {defineComponent} from "vue";
import PageTitle from "@/views/PageTitle.vue";
import {RoutePath} from "@/constants/RoutePath";
import PostById from "@/components/PostById.vue";
import PostListOrCreatePost from "@/components/PostListOrCreatePost.vue";

export default defineComponent({
  name: "posts-view",
  computed: {
    postByIdRoutePath(): string {
      return RoutePath.POST.replace(":post",String(this.$router.currentRoute.value.params.post)) ;
    },
    currentRoute(): string{
      return this.$router.currentRoute.value.path;
    }
  },
  components: {PostListOrCreatePost, PostById, PageTitle}

});
</script>

<template>
  <div class="post-view">
    <page-title title="les pooosts !"/>
    <div v-if="currentRoute === postByIdRoutePath">
      <post-by-id></post-by-id>
    </div>
    <div v-else>
      <post-list-or-create-post></post-list-or-create-post>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.post-view
  margin-top: 3rem
</style>