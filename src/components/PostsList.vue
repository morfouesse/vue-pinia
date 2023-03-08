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
    }
  },
  computed:{
    posts(): Post[]{
      return this.postsStore.getPosts;
    }
  },
  created() {
    this.postsStore.fetchPosts();
  }
});
</script>
<template>
   <div class="posts">
  <div v-for="post in posts"  :key="post.id">
    <post-card :post="post"/>
   </div>
  </div>
</template>

<style lang="sass" scoped>
.posts
  display: flex
  flex-wrap: wrap
  flex-direction: row
  justify-content: center
  gap: 16px
</style>