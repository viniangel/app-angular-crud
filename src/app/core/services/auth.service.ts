import { inject, Service } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Service()
export class AuthService {
   private urlBase = environment.servidor_laravel;

   private http = inject(HttpClient);

   funLoginLaravel(credenciales: any){
      return this.http.post(`${this.urlBase}/api/v1/auth/login`, credenciales);
   }

   funRegister(){}

   funPerfil(){

   }

   funLogOut(){}
}
