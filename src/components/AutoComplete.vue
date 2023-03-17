<script lang="ts">
import {defineComponent, ref} from "vue";
import {usePostsStore} from "@/stores/PostsStore";
import type {Post} from "@/constants/Models";

export default defineComponent({
  name: 'auto-complete',
  data(){
    return{
      selectedPost: ref<Post>().value,
      postsStore: usePostsStore(),
    }
  },
  watch:{
    selectedPost() {
      this.newSelectedPost();
    },
  },
  methods: {
    newSelectedPost(): void {
      if(this.selectedPost){
      this.postsStore.post = this.selectedPost;
      }
      this.$router.push({
        name: "post",
        params: {
          post: this.selectedPost?.id,
        },
      });
    },
  }
});
</script>
<template>
      <v-autocomplete
          placeholder="post1..."
          :items="postsStore.getPosts"
          :item-title="item => item.title"
          :item-value="item => item.id"
          return-object
          v-model="selectedPost"
          variant="solo"
          class="auto-complete"
      ></v-autocomplete>
</template>
<style lang="sass" scoped>
@import "@/constants/Main.sass"
@mixin mobile-tablet()
  @media screen and (max-width: map-get($breakpoints, tablet))
    @content

.auto-complete
  min-width: 300px
  max-width: 400px
  @include mobile-tablet
    margin: 50px 20px 47px 20px

</style>