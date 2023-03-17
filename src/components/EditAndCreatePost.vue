<script setup lang="ts">

import {computed, ref} from "vue";
import type {Post} from "@/constants/Models";
import moment from "moment";
import PostCard from "@/components/PostCard.vue";
import {UtilsService} from "@/services/Utils.services";
import {usePostsStore} from "@/stores/PostsStore";
import {SelectedChips} from "@/constants/Enums";

const utilsSvc = new UtilsService();

const diseableIcons = true;
const form = ref<HTMLFormElement>();
const postsStore = usePostsStore();
const postTitle = "Titre *";
const postBody = "Description *";
const postButton = "Créer";
const isNotValided = computed(() => !post.title || !post.body);
const rules = [
  (v: string) => !!v || 'Service name is required',
  (v: string) =>
      v.length <= 20 || 'Service name must be less than 20 characters',
];
let post = ref<Post>({
  title: "",
  body: "",
  createdIn: "",
}).value;

const emit = defineEmits(["selected-chips"]);

function submitPost(event:Event): void {
  if (!isNotValided.value) {
    post.createdIn = moment().format(utilsSvc.formatDateHourSecond());
    postsStore.createPost(post);
    event.preventDefault();
    emit("selected-chips", SelectedChips.POST_LIST)
  }
  form.value?.reset();
}
</script>

<template>
  <div
      class="row-content"
  >
    <div
        class="form"
    >
      <v-form ref="form" @submit.prevent>
        <div class="inputs">
          <div>
            <v-text-field
                class="text-field"
                v-model="post.title"
                :label="postTitle"
                :rules="rules"
            >
            </v-text-field>
          </div>
          <div>
            <v-textarea
                rows="1"
                v-model="post.body"
                :label="postBody"
                :rules="rules"
            >
            </v-textarea>
          </div>
        </div>
        <div>
          <div class="button-file">
            {{ post.image }}
          </div>
          <v-btn
              type="submit"
              @click="submitPost"
          >
            {{ postButton }}
          </v-btn>
        </div>
      </v-form>
    </div>
    <post-card :post="post" :diseable-icons="diseableIcons"></post-card>
  </div>
</template>

<style scoped lang="sass">
@import "@/constants/Main.sass"


.row-content
  margin-top: 30px
  flex-direction: row
  display: flex
  flex-wrap: wrap
  gap: 30px
  justify-content: space-around
  @media screen and (max-width: map-get($breakpoints, tablet))
    padding-bottom: 100px

  .form
    padding: 40px
    border-radius: 5px
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)
    @media screen and (max-width: map-get($breakpoints, tablet))
      width: 300px

    .inputs
      flex-direction: row
      display: flex
      flex-wrap: wrap
      gap: 20px

      .text-field
        width: 180px

    .button-file
      margin-top: 60px
      margin-bottom: 80px

</style>
