<script lang="ts">
import {defineComponent} from "vue";
import PostsList from "@/components/PostsList.vue";
import PageTitle from "@/views/PageTitle.vue";
import {RoutePath} from "@/constants/RoutePath";
import PostById from "@/components/PostById.vue";

export default defineComponent({
  name: "posts-view",
  computed: {
    postRoutePath(): string {
      return RoutePath.POST.replace(":post",String(this.$router.currentRoute.value.params.post)) ;
    },
    currentRoute(): string{
      return this.$router.currentRoute.value.path;
    }
  },
  components: {PostById, PageTitle, PostsList}

});
</script>

<template>
  <div class="post-view">
    <page-title title="les pooosts !"/>
    <div v-if="currentRoute === postRoutePath">
      <post-by-id></post-by-id>
    </div>
    <div v-else>
      <posts-list></posts-list>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.post-view
  margin-top: 3rem
</style>