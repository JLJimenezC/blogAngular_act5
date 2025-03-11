import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/ipost.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private arrPost: IPost[] = [
    {
      id: 1,
      title: 'First Post',
      url: 'https://h2.gifposter.com/bingImages/CreteHarbor_1920x1080.jpg',
      author: 'Author 1',
      date: '2023-01-01',
      body: 'This is the body of the first post.',
    },
    {
      id: 2,
      title: 'Second Post',
      url: 'https://h2.gifposter.com/bingImages/CreteHarbor_1920x1080.jpg',
      author: 'Author 2',
      date: '2023-01-02',
      body: '<strong>This is the body</strong> of the second post.',
    },
    {
      id: 3,
      title: 'Third Post',
      url: 'https://h2.gifposter.com/bingImages/CreteHarbor_1920x1080.jpg',
      author: 'Author 3',
      date: '2023-01-03',
      body: 'This is the body of the third post.',
    },
  ];
  id: number = 4;
  getAllPosts(): IPost[] {
    return this.arrPost;  
  }
  insert(newPost:IPost):any{
    newPost.id=this.id;
    this.arrPost.push(newPost);
    this.id++;
    return "Post Insertado con Éxito";
  }
  constructor() { }
}
