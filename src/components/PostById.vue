<script lang="ts">
import {defineComponent} from "vue";
import {usePostsStore} from "@/stores/PostsStore";
import PostCard from "@/components/PostCard.vue";
import {RoutePath} from "@/constants/RoutePath";

export default defineComponent({
  name: "post-by-id",
  components: {PostCard},
  data() {
    return {
      postsStore: usePostsStore(),
      postsLink: [
        {
          title: "La liste des posts",
          disabled: false,
          href: RoutePath.POSTS
        },
        {
          title: "Le post sélectionné",
          disabled: true,
        },
      ]
    }
  },
  created() {
    if (!this.postsStore.getPost || this.postsStore.getPosts.length === 0) {
      this.$router.push(RoutePath.POSTS);
    }
  }
});
</script>
<template>
  <div class="post" v-if="postsStore.getPost">
    <v-breadcrumbs :items="postsLink"></v-breadcrumbs>
    <post-card :post="postsStore.getPost"></post-card>
  </div>
</template>

<style lang="sass" scoped>
//the opacity var of vuetify bug for mobile and tablet, so I need to do that
::v-deep(.v-breadcrumbs-item--disabled)
  opacity: 0.38

.post
  display: flex
  flex-direction: column
  align-items:  center
</style>