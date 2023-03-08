<script lang="ts">
import {defineComponent, ref} from "vue";
import {RoutePath} from "@/constants/RoutePath";
import {usePostsStore} from "@/stores/PostsStore";
import type {Post} from "@/constants/Models";

export default defineComponent({
  name: 'nav-bar',
  data() {
    return {
      postsStore: usePostsStore(),
      selectedPost: ref<Post>().value,
      dialog: false,
    }
  },
  watch: {
    selectedPost() {
      this.postsStore.post = this.selectedPost;
      this.$router.push({
        name: "post",
        params: {
          post: this.selectedPost?.id,
        },
      });
    }
  },
  methods: {
    goToPosts(): void {
      this.$router.push(RoutePath.POSTS);
    },
    goToHome(): void {
      this.$router.push(RoutePath.HOME);
    },
  }
});
</script>
<template>
  <v-tabs class="tabs"
          fixed-tabs
  >
    <!--      bg-color="indigo-darken-2"-->
    <v-tab @click="goToPosts">
      Les posts
    </v-tab>
    <v-tab @click="goToHome">
      Accueil
    </v-tab>
    <v-tab @click="goToPosts" prepend-icon="search">
      Chercher
      <v-dialog
          v-model="dialog"
          activator="parent"
      >
        <v-card>
          <v-autocomplete
              clearable
              placeholder="post1..."
              :items="postsStore.getPosts"
              :item-title="item => item.title"
              :item-value="item => item.id"
              return-object
              v-model="selectedPost"
              variant="solo"
          ></v-autocomplete>
          <v-chip>
            Chip
          </v-chip>
          <v-card-actions>
            <v-btn color="primary" block @click="dialog = false">Fermer</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-tab>
  </v-tabs>
</template>

<style lang="sass" scoped>
@import "src/constants/colors.sass"
.v-dialog > .v-overlay__content > .v-card
  display: block

.tabs
  background-color: $red
  color: $white
</style>