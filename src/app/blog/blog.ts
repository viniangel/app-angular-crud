import { Component, inject, signal } from '@angular/core';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  blogService = inject(BlogService)
  publicaciones = signal<any>([])

  constructor(){
    this.funListarPublicaciones();
  }

  funListarPublicaciones(){
    this.blogService.funObtenerArticulos().subscribe({
      next: (data: any) => this.publicaciones.set(data),
      error: (err) => console.log('Error al recuperar las publicaciones', err)
    })
  }
}
