<script lang="ts">
import {defineComponent} from "vue";
import PageTitle from "@/components/PageTitle.vue";
import ChipsNavigation from "@/components/ChipsNavigation.vue";

export default defineComponent({
  name: "posts-view",
  components: {ChipsNavigation, PageTitle}

});
</script>

<template>
  <div class="post-view">
    <page-title title="les pooosts !"/>
    <div>
      <chips-navigation></chips-navigation>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.post-view
  margin-top: 3rem
</style>