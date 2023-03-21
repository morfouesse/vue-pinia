<script setup lang="ts">
import {usePostsStore} from "@/stores/PostsStore";
import PostCard from "@/components/PostCard.vue";

const postsHistory = usePostsStore().getPostHistory;

</script>
<template>
  <div class="cards">
    <div v-for="post in postsHistory" :key="post.id">
      <post-card :post="post" :history-icon="true"></post-card>
    </div>
  </div>
</template>
<style lang="sass" scoped>
.cards
  display: flex
  flex-wrap: wrap
  flex-direction: row
  justify-content: center
  gap: 16px
</style>