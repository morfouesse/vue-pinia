<script lang="ts">
import {defineComponent} from "vue";
import {RoutePath} from "@/constants/RoutePath";

export default defineComponent({
  name: "side-bar",
  methods:{
    goToPosts(): void{
      this.$router.push(RoutePath.POSTS);
    },
    goToHome(): void{
      this.$router.push(RoutePath.HOME);
    }
  }
});
</script>
<template>
      <v-navigation-drawer
          expand-on-hover
          rail
      >
        <v-list>
          <v-list-item
              prepend-avatar="src/assets/post_fr.png"
              title="Poooost moi !!"
          ></v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list density="compact" nav>
          <v-list-item prepend-icon="home" @click="goToHome" value="0" title="Accueil"></v-list-item>
          <v-list-item prepend-icon="comment" @click="goToPosts" value="1" title="les  poosts !"></v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>

<style lang="sass" scoped>
</style>