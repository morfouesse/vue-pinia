<script lang="ts">
import {defineComponent} from "vue";
import {usePostsStore} from "@/stores/PostsStore";
import type {Post} from "@/constants/Models";
import PostCard from "@/components/PostCard.vue";
import {UtilsService} from "@/services/Utils.services";
import {ScreenType} from "@/constants/Enums";

const utilsSvc = new UtilsService();
export default defineComponent({
  name: "posts-list",
  components: {PostCard},
  data() {
    return {
      screenType: utilsSvc.useBreakpoints(),
      postsStore: usePostsStore(),
      loading: true,
    }
  },
  computed: {
    ScreenType() {
      return ScreenType;
    },
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
    <div class="posts" :style="screenType.value !== ScreenType.XS ? 'padding-bottom:75px;' : ''">
      <div v-for="post in posts" :key="post.id">
        <post-card :post="post"/>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.loader
  display: flex
  justify-content: center

.posts
  display: flex
  flex-wrap: wrap
  flex-direction: row
  justify-content: center
  gap: 16px
</style>