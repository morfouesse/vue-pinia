<script lang="ts">
import {defineComponent} from "vue";
import SideBar from "@/components/SideBar.vue";
import {UtilsService} from "@/services/Utils.services";
import {ScreenType} from "@/constants/Enums";
import BottomAppBar from "@/components/BottomAppBar.vue";

const utilsSvc = new UtilsService();
export default defineComponent({
  computed: {
    ScreenType() {
      return ScreenType
    }
  },
  components: {BottomAppBar, SideBar},
  data() {
    return {
      screenType: utilsSvc.useBreakpoints()
    }
  }
})
</script>

<template>
  <div>
    <div v-if="screenType === ScreenType.XS">
      <bottom-app-bar/>
      <main>
        <RouterView></RouterView>
      </main>
    </div>
    <v-card v-else elevation="0">
      <v-layout>
        <div>
          <side-bar></side-bar>
        </div>
        <v-main>
          <v-container fluid>
            <RouterView></RouterView>
          </v-container>
        </v-main>
      </v-layout>
    </v-card>
  </div>
</template>

