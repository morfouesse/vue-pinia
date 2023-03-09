import { defineStore } from 'pinia'
import { PostsService } from '@/services/Posts.service'
import type { Post } from '@/constants/Models'
import { ref } from 'vue'

const postsSvc = new PostsService()
export const usePostsStore = defineStore('postsStore', {
  state: () => ({
    posts: [] as Post[],
    post: ref<Post>().value
  }),
  getters: {
    getPosts(state) {
      return state.posts
    },
    getPost(state) {
      return state.post
    }
  },
  actions: {
    async fetchPosts(): Promise<void> {
      await postsSvc.getPosts().then((posts) => {
        this.posts = posts.data
      })
    }
  }
})
