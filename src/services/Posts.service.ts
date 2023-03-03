import type { AxiosResponse } from 'axios'
import axios from 'axios'
import type { Post } from '@/constants/Models'
import { Endpoints } from '@/constants/Endpoints'

export class PostsService {
  public async getPosts(): Promise<AxiosResponse<Post[]>> {
    return await axios.get(Endpoints.GET_POSTS)
  }

  public async getPostById(id: number): Promise<AxiosResponse<Post>> {
    return await axios.get(Endpoints.GET_POST_BY_ID.replace('{post}', String(id)))
  }

  public async deletePostById(id: number): Promise<AxiosResponse<Post>> {
    return await axios.delete(Endpoints.DELETE_POST_BY_ID.replace('{post}', String(id)))
  }

  public async postPost(post: Post): Promise<AxiosResponse<Post>> {
    return await axios.post(Endpoints.POST_POST, post, {
      headers: { 'content-type': 'application/json' }
    })
  }

  public async putPost(post: Post): Promise<AxiosResponse<Post>> {
    return await axios.put(Endpoints.PUT_POST.replace('{post}', String(post.id)), post, {
      headers: { 'content-type': 'application/json' }
    })
  }
}
