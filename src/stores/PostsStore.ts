import { defineStore } from 'pinia'
import { PostsService } from '@/services/Posts.service'
import type { Post } from '@/constants/Models'

const postsSvc = new PostsService()
export const usePostsStore = defineStore('postsStore', {
  state: () => ({
    posts: [] as Post[]
  }),
  getters: {
    getPosts(state) {
      return state.posts
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
