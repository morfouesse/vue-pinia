<script lang="ts">
import {defineComponent, type PropType} from "vue";
import type {Post} from "@/constants/Models";

export default defineComponent({
  name: 'post-card',
  props: {
    post: {
      type: Object as PropType<Post>
    }
  }
});
</script>
<template>
  <v-card theme="dark" class="card">
    <div>
      <v-card-title class="text-h6">
        {{ post.title }}
      </v-card-title>
      <div class="inside-card">
        <div class="subtitle-actions-buttons">
          <div>
            <v-card-subtitle class="subtitle">{{ post.body }}</v-card-subtitle>
          </div>
          <div>
            <v-card-actions class="actions">
              <v-btn
                  class="btn"
                  icon="edit"
                  variant="text"
              ></v-btn>
              <v-btn
                  class="btn"
                  icon="delete"
                  variant="text"
              ></v-btn>
            </v-card-actions>
          </div>
        </div>
        <div>
          <v-avatar
              class="ma-3"
              size="125"
              rounded="0"
          >
            <v-img src="../src/assets/logo.svg"></v-img>
          </v-avatar>
        </div>
      </div>

    </div>
  </v-card>
</template>
<style lang="sass" scoped>
.card
  width: 350px
  background: rgb(166, 9, 9)
  background: linear-gradient(90deg, rgba(166, 9, 9, 1) 38%, rgba(255, 0, 0) 100%)
  .inside-card
    display: flex
    flex-wrap: nowrap
    justify-content: space-between
    .subtitle-actions-buttons
      display: flex
      flex-direction: column
      justify-content: space-between
      .subtitle
        word-wrap: break-word
        white-space: normal
        width: 200px
        height: 85px
</style>