<script lang="ts">
import {defineComponent} from "vue";
import PostsList from "@/components/PostsList.vue";
import EditAndCreatePost from "@/components/EditAndCreatePost.vue";
import PostsHistory from "@/components/PostsHistory.vue";
import AutoComplete from "@/components/AutoComplete.vue";
import {UtilsService} from "@/services/Utils.services";
import {ScreenType, SelectedChips} from "@/constants/Enums";
import PostById from "@/components/PostById.vue";

const utilsSvc = new UtilsService();
export default defineComponent({
  name: "post-list-or-create-post",
  // ne pas oublié d'importé le composant avec keepAlive !!
  components: {PostById, AutoComplete, EditAndCreatePost, PostsHistory, PostsList},
  data() {
    return {
      screenType: utilsSvc.useBreakpoints(),
      selected: SelectedChips.POST_LIST,
      component: "posts-list",
      chips: [
        // we need component name because we use KeepAlive component
        {label: "La liste des posts", value: "posts-list"},
        {label: "Créer un post", value: "EditAndCreatePost"},
        {label: "Historique des posts", value: "PostsHistory"}
      ],
    }
  },
  computed: {
    SelectedChips() {
      return SelectedChips
    },
    ScreenType() {
      return ScreenType;
    },
  },
  watch: {
    selected() {
      this.chipsNavigation();
    }
  },
  methods: {
    chipsNavigation(): void {
      switch (this.selected) {
          //eslint chiant
        case SelectedChips.CREATE_POST:
          this.component = this.chips[SelectedChips.CREATE_POST].value;
          break;
        case SelectedChips.POST_LIST:
          this.component = this.chips[SelectedChips.POST_LIST].value;
          break;
        case SelectedChips.POSTS_HISTORY:
          this.component = this.chips[SelectedChips.POSTS_HISTORY].value;
          break;
      }
    }
  }
})
;
</script>
<template>
  <div class="chips">
    <div>
      <v-chip-group
          mandatory
          selected-class="text-primary"
          v-model="selected"
      >
        <v-chip v-for="chip in chips" :key="chip">{{ chip.label }}</v-chip>
      </v-chip-group>
    </div>
    <div v-if="screenType === ScreenType.LG">
      <auto-complete></auto-complete>
    </div>
  </div>
  <div>
<!--      editAndCreatePot event selected-chips-->
    <KeepAlive include="EditAndCreatePost">
      <component :is="component" @selected-chips="(value) => {if(SelectedChips.CREATE_POST){selected = value}}"></component>
    </KeepAlive>
  </div>
</template>


<style lang="sass" scoped>
.chips
  display: flex
  margin-left: 20px
</style>