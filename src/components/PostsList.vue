<script lang="ts">
import {defineComponent} from "vue";
import {usePostsStore} from "@/stores/PostsStore";
import type {Post} from "@/constants/Models";
import PostCard from "@/components/PostCard.vue";

export default defineComponent({
  name: "posts-list",
  components: {PostCard},
  data() {
    return {
      postsStore: usePostsStore(),
      loading: true,
    }
  },
  computed: {
    posts(): Post[] {
      return this.postsStore.getPosts;
    }

  },
  watch: {
    posts() {
      if (this.posts.length !== 0) {
        this.loading = false;
      }
    }
  },
  created() {
    this.postsStore.fetchPosts();
  }
});
</script>
<template>
  <div v-if="loading" class="loader">
    <v-progress-circular indeterminate></v-progress-circular>
  </div>
  <div v-else>
    <div class="posts">
      <div v-for="post in posts" :key="post.id">
        <post-card :post="post"/>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import "@/constants/main.sass"
@mixin mobile-tablet()
  @media screen and (max-width: map-get($breakpoints, tablet))
    @content

.loader
  display: flex
  justify-content: center

.posts
  display: flex
  flex-wrap: wrap
  flex-direction: row
  justify-content: center
  gap: 16px
  @include mobile-tablet
    padding-bottom: 75px
</style>