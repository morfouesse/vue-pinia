<script>
import {defineComponent} from "vue";
import NavBar from "@/components/Navbar.vue";

export default defineComponent({
  components: {NavBar}
})
</script>

<template>
  <div class="page">
    <v-card elevation="0">
      <v-layout>
        <NavBar></NavBar>
        <v-main class="main">
          <v-container fluid>
            <RouterView class="space"></RouterView>
          </v-container>
        </v-main>
      </v-layout>
    </v-card>
  </div>
</template>

<style lang="sass" scoped>
  .main
    margin: 0 5px 0 5px

</style>
