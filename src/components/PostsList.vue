<script lang="ts">
import {defineComponent} from "vue";
import {usePostsStore} from "@/stores/PostsStore";
import type {Post} from "@/constants/Models";

export default defineComponent({
  name: "posts-list",
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
    <v-card :title="post.title" :subtitle="post.body" text="...">
      <v-card-actions>
        <v-btn>Click me</v-btn>
      </v-card-actions>
    </v-card>
   </div>
  </div>
</template>

<style scoped>
.posts{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 20px;
}
</style>