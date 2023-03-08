<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'post-card',
  props: {
    post: {}
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
        <div>
          <v-card-subtitle>{{ post.body }}</v-card-subtitle>
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
    .actions
      padding-top: 58px
      .btn
        margin-top: 15px
</style>