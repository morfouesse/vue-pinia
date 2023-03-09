<script lang="ts">
import {defineComponent} from "vue";
import {usePostsStore} from "@/stores/PostsStore";
import PostCard from "@/components/PostCard.vue";
import {RoutePath} from "@/constants/RoutePath";

export default defineComponent({
  name: "post-by-id",
  components: {PostCard},
  data(){
    return{
      postsStore: usePostsStore(),
    }
  },
  created() {
    if(!this.postsStore.getPost){
      console.log(this.postsStore.getPost)
      this.$router.push(RoutePath.POSTS);
    }
  }
});
</script>
<template>
  <div class="post" v-if="postsStore.getPost">
<post-card :post="postsStore.getPost"></post-card>
  </div>
</template>

<style lang="sass" scoped>
.post
  display: flex
  justify-content: center
</style>