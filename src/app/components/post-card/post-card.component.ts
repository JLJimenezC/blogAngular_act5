import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IPost } from '../../interfaces/ipost.interfaces';
import { NgxSonnerToaster } from 'ngx-sonner';

@Component({
  selector: 'app-post-card',
  imports: [DatePipe,NgxSonnerToaster],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent {
  @Input() miPost!:IPost
}
