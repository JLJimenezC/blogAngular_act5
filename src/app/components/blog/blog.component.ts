import { Component } from '@angular/core';
import { IPost } from '../../interfaces/ipost.interfaces';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-blog',
  imports: [DatePipe],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  arrPost: IPost[] = [
    {
      id: 1,
      title: 'First Post',
      url: 'https://h2.gifposter.com/bingImages/CreteHarbor_1920x1080.jpg',
      author: 'Author 1',
      date: '2023-01-01',
      body: 'This is the body of the first post.'
    },
    {
      id: 2,
      title: 'Second Post',
      url: 'https://h2.gifposter.com/bingImages/CreteHarbor_1920x1080.jpg',
      author: 'Author 2',
      date: '2023-01-02',
      body: '<strong>This is the body</strong> of the second post.'
    },
    {
      id: 3,
      title: 'Third Post',
      url: 'https://h2.gifposter.com/bingImages/CreteHarbor_1920x1080.jpg',
      author: 'Author 3',
      date: '2023-01-03',
      body: 'This is the body of the third post.'
    }
  ];
  ngOnInit() {
    //this.getData();
  }
  /*getData():string{
    let html="";
    this.posts.forEach(post=>{
      html+=`<article>
      <figure>
        <img
          src="${post.url}"
          alt="${post.title}"
        />
      </figure>
      <h3>${post.title}</h3>
      <p>Autor: ${post.author}</p>
      <p>Fecha:${post.date}</p>
      <div class="content">
        <p>
        ${post.body}
        </p>
      </div>
    </article>`
    })
    return html;
  }*/
}
