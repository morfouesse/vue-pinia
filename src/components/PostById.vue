<script lang="ts">
import {defineComponent} from "vue";
import {usePostsStore} from "@/stores/PostsStore";
import PostCard from "@/components/PostCard.vue";

export default defineComponent({
  name: "post-by-id",
  components: {PostCard},
  data(){
    return{
      postsStore: usePostsStore(),
    }
  }
});
</script>
<template>
  <div class="post">
<post-card :post="postsStore.post"></post-card>
  </div>
</template>

<style lang="sass" scoped>
.post
  display: flex
  justify-content: center
</style>