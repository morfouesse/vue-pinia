<script lang="ts">
import {defineComponent} from "vue";
import PostsList from "@/components/PostsList.vue";
import EditAndCreatePost from "@/components/EditAndCreatePost.vue";
import AutoComplete from "@/components/AutoComplete.vue";
import {UtilsService} from "@/services/Utils.services";
import {ScreenType} from "@/constants/Enums";

const utilsSvc = new UtilsService();
export default defineComponent({
  name: "post-list-or-create-post",
  computed: {
    ScreenType() {
      return ScreenType;
    }
  },
  components: {AutoComplete, EditAndCreatePost, PostsList},
  data() {
    return {
      screenType: utilsSvc.useBreakpoints(),
      selected: 0,
      component: "posts-list",
      chips: [
        // we need component name because we use KeepAlive component
        {label: "La liste des posts", value: "posts-list"},
        {label: "Créer un post", value: "edit-and-create-post"},
      ],
    }
  },
  watch: {
    selected() {
      if (this.selected === 0) {
        this.component = this.chips[0].value;
      }
      if (this.selected === 1) {
        this.component = this.chips[1].value;
      }
    },
  },
});
</script>
<template>
  <div class="chips">
    <v-chip-group
        selected-class="text-primary"
        v-model="selected"
    >
      <v-chip v-for="chip in chips" :key="chip">{{ chip.label }}</v-chip>
    </v-chip-group>
    <div v-if="screenType === ScreenType.LG">
      <auto-complete></auto-complete>
    </div>
  </div>
  <KeepAlive include="edit-and-create-post">
    <component :is="component"></component>
  </KeepAlive>
</template>


<style lang="sass" scoped>
.chips
  display: flex
  margin-left: 20px
</style>