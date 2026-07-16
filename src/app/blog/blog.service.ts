import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class BlogService {
   private apiUrl = 'https://dev.to/api/articles';
   
   http = inject(HttpClient);

   funObtenerArticulos(){
      return this.http.get(this.apiUrl)
   }
}
