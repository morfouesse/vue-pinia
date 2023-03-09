<script lang="ts">
import {defineComponent, ref} from "vue";
import {RoutePath} from "@/constants/RoutePath";
import {usePostsStore} from "@/stores/PostsStore";
import type {Post} from "@/constants/Models";
import AutoComplete from "@/components/AutoComplete.vue";

export default defineComponent({
  name: 'bottom-app-bar',
  components: {AutoComplete},
  data() {
    return {
      selected: "",
      bottomAppList: ["home", "posts", "chercher"],
      dialog: false,
      selectedPost: ref<Post>().value,
      postsStore: usePostsStore(),
    }
  },
  watch: {
    selected() {
      if (this.selected === this.bottomAppList[0]) {
        this.goToHome();
      } else if (this.selected === this.bottomAppList[1] || this.selected === this.bottomAppList[2]) {
        this.goToPosts();
      }
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
  <v-layout class="overflow-visible">
    <v-bottom-navigation
        v-model="selected"
        grow
    >
      <v-btn :value="bottomAppList[0]">
        <v-icon icon="home"></v-icon>
        <span>Accueil</span>
      </v-btn>
      <v-btn :value="bottomAppList[1]">
        <v-icon icon="comment"></v-icon>
        <span>Les posts</span>
      </v-btn>
      <v-btn @click="dialog = true" :value="bottomAppList[2]">
        <v-icon icon="search"></v-icon>
        <span>Chercher</span>
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
  <div>
    <v-dialog
        v-model="dialog"
        activator="parent"
    >
      <v-card>
        <auto-complete></auto-complete>
        <v-card-actions>
          <v-btn class="btn" block @click="dialog = false">Fermer</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<style lang="sass" scoped>
@import "@/constants/colors.sass"
.v-dialog > .v-overlay__content > .v-card
  height: 300px
.btn
  color: $red
</style>