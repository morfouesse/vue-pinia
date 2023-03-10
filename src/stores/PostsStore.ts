import { defineStore } from 'pinia'
import { PostsService } from '@/services/Posts.service'
import type { Post } from '@/constants/Models'

const postsSvc = new PostsService()
export const usePostsStore = defineStore('postsStore', {
  state: () => ({
    posts: [] as Post[],
    post: {} as Post
  }),
  getters: {
    getPosts(state): Post[] {
      return state.posts
    },
    getPost(state): Post {
      return state.post
    }
  },
  actions: {
    async fetchPosts(): Promise<void> {
      await postsSvc.getPosts().then((posts) => {
        this.posts = posts.data
      })
    },
    async deletePost(id: number): Promise<void> {
      await postsSvc.deletePostById(id)
      await this.fetchPosts()
    }
  }
})
