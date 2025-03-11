import { Component } from '@angular/core';
import { IPost } from '../../interfaces/ipost.interfaces';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  posts: IPost[] = [
    {
      id: 1,
      title: 'First Post',
      url: 'http://example.com/first-post',
      author: 'Author 1',
      date: '2023-01-01',
      body: 'This is the body of the first post.'
    },
    {
      id: 2,
      title: 'Second Post',
      url: 'http://example.com/second-post',
      author: 'Author 2',
      date: '2023-01-02',
      body: 'This is the body of the second post.'
    },
    {
      id: 3,
      title: 'Third Post',
      url: 'http://example.com/third-post',
      author: 'Author 3',
      date: '2023-01-03',
      body: 'This is the body of the third post.'
    }
  ];
  
}
