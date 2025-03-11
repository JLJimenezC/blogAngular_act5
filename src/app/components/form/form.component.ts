import { Component, inject } from '@angular/core';
import { IPost } from '../../interfaces/ipost.interfaces';
import { PostsService } from '../../services/posts.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  postsService = inject(PostsService);

  guardarPost(form: any) {
    if (
      form.value.title !== '' &&
      form.value.date != '' &&
      form.value.body != '' &&
      form.value.author != '' &&
      form.value.url != ''
    ) {
      //Llevar el newPost al servicio, para ello tenemos que inyectar el servicio dentro de este componente
      let response = this.postsService.insert(form.value);
      alert(response);
      form.reset();
    } else {
      alert('Faltan campos por llenar');
    }
  }
}
