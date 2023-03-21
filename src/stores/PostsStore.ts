import { defineStore } from 'pinia'
import { PostsService } from '@/services/Posts.service'
import type { Post } from '@/constants/Models'

const postsSvc = new PostsService()
export const usePostsStore = defineStore('postsStore', {
  state: () => ({
    posts: [] as Post[],
    post: {} as Post,
    postsHistory: [] as Post[]
  }),
  getters: {
    getPosts(state): Post[] {
      return state.posts
    },
    getPost(state): Post {
      return state.post
    },
    getPostHistory(state): Post[] {
      return state.postsHistory
    }
  },
  actions: {
    async fetchPosts(): Promise<void> {
      await postsSvc.getPosts().then((posts) => {
        this.posts = posts.data
      })
    },
    async createPost(post: Post): Promise<void> {
      await postsSvc.postPost(post)
    },
    async updatePost(post: Post): Promise<void> {
      await postsSvc.putPost(post).then((post) => {
        this.post = post.data
      })
    },
    async fetchPostById(id: number): Promise<void> {
      await postsSvc.getPostById(id).then((post) => {
        this.post = post.data
      })
    },
    async deletePost(post: Post): Promise<void> {
      this.addPostHistory(post)
      await postsSvc.deletePostById(post.id!)
    },
    addPostHistory(post: Post): void {
      this.postsHistory.push(post)
    },
    removePostHistory(post: Post) {
      const postHistoryIndex = this.postsHistory.findIndex((value) => value === post)
      this.postsHistory.splice(postHistoryIndex)
      this.createPost(post)
        .then()
        .catch()
        .then(() => {
          this.fetchPosts().then()
        })
    }
  },
  persist: {
    storage: sessionStorage, // data in sessionStorage is cleared when the page session ends.
    paths: ['post', 'postsHistory'] // state qu'ont persist
  }
})
