<script lang="ts">
import {defineComponent, type PropType} from "vue";
import type {Post} from "@/constants/Models";
import {UtilsService} from "@/services/Utils.services";
import {usePostsStore} from "@/stores/PostsStore";
import {RoutePath} from "@/constants/RoutePath";

const utilsSvc = new UtilsService();
export default defineComponent({
  name: 'post-card',
  data() {
    return {
      url: utilsSvc.randomGif(),
      postStore: usePostsStore(),
    }
  },
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true
    },
    disableIcons: {
      type: Boolean
    },
    historyIcon: {
      type: Boolean
    },
  },
  emit: ["is-deleted-post"],
  methods: {
    editPost(): void{
      this.postStore.fetchPostById(this.post.id!).then().catch().then(() => {
      this.$router.push(RoutePath.EDIT_POST.replace(":post",String(this.post.id)));
      });
    },
    deletePost(): void {
      this.postStore.deletePost(this.post).then().catch().then(() => {
        this.postStore.fetchPosts();
        this.$emit("is-deleted-post", true);
      });
    },
    undoPost(): void {
      this.postStore.removePostHistory(this.post);
    }
  },

});
</script>
<template>
  <div class="flip-card">
    <div class="flip-card-inner">
      <v-card theme="dark" class="flip-card-front">
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
                  <div v-if="!historyIcon">
                    <v-btn
                        @click="editPost"
                        class="btn"
                        icon="edit"
                        variant="text"
                        :disabled="disableIcons"
                    ></v-btn>
                    <v-btn
                        @click="deletePost"
                        class="btn"
                        icon="delete"
                        variant="text"
                        :disabled="disableIcons"
                    ></v-btn>
                  </div>
                  <div v-else>
                    <v-btn
                        @click="undoPost"
                        class="btn"
                        icon="restore_from_trash"
                        variant="text"
                    ></v-btn>
                  </div>
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
      <v-card class="flip-card-back">
        <v-avatar
            class="gif"
            rounded="0"
        >
          <v-img :src="url"></v-img>
        </v-avatar>
      </v-card>
    </div>
  </div>
</template>
<style lang="sass" scoped>
.flip-card
  width: 350px
  height: 197px
  cursor: pointer

  .flip-card-inner
    position: relative
    width: 100%
    height: 100%
    transition: transform 0.6s
    transform-style: preserve-3d

    .flip-card-front
      background: linear-gradient(90deg, rgba(166, 9, 9, 1) 38%, rgba(255, 0, 0) 100%)

      .inside-card
        display: flex
        flex-wrap: nowrap
        justify-content: space-between

        .subtitle
          word-wrap: break-word
          white-space: normal
          width: 200px
          height: 85px

        .subtitle-actions-buttons
          display: flex
          flex-direction: column
          justify-content: space-between

    .flip-card-back
      transform: rotateY(180deg)
      background: linear-gradient(90deg, rgba(255, 0, 0) 38%, rgba(166, 9, 9, 1) 100%)

      .gif
        width: 350px
        height: 198px

.flip-card:active .flip-card-inner
  transition: 1300ms
  transform: rotateY(180deg)

.flip-card-front, .flip-card-back
  position: absolute
  width: 100%
  height: 100%
  -webkit-backface-visibility: hidden
  backface-visibility: hidden

</style>