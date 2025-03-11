import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { IPost } from '../../interfaces/ipost.interfaces';

@Component({
  selector: 'app-post-list',
  imports: [DatePipe],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  arrPost: IPost[]=[]
  //Le pedimos al servicio que nos de los posts
  
  postsService=inject(PostsService);
  ngOnInit() {
     this.arrPost=this.postsService.getAllPosts();
  }
}
