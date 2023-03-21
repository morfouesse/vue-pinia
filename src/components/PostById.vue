<script lang="ts">
import {defineComponent} from "vue";
import {usePostsStore} from "@/stores/PostsStore";
import PostCard from "@/components/PostCard.vue";
import {RoutePath} from "@/constants/RoutePath";
import EditAndCreatePost from "@/components/EditAndCreatePost.vue";

export default defineComponent({
  name: "post-by-id",
  computed: {
    editPostRoute(): boolean {
      return this.$router.currentRoute.value.path === RoutePath.EDIT_POST.replace(":post",String(this.post.id));
    }
  },
  components: {EditAndCreatePost, PostCard},
  data() {
    return {
      post: usePostsStore().getPost,
      isDeletedPost: false,
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
  watch:{
    isDeletedPost(){
      if (this.isDeletedPost) {
        this.$router.push(RoutePath.POSTS);
      }
    }
  },
});
</script>
<template>
  <div class="post" v-if="post">
    <v-breadcrumbs :items="postsLink"></v-breadcrumbs>
    <div v-if="editPostRoute">
    <edit-and-create-post :is-edit-post="true"></edit-and-create-post>
    </div>
    <div v-else>
    <post-card @is-deleted-post="(value) => isDeletedPost = value" :post="post"></post-card>
    </div>
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