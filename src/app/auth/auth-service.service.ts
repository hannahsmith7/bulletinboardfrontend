import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private token!: string;

  constructor(private http: HttpClient, public router: Router) { }

  signup (userusername:string,userpassword: string)
  {
    this.http.post('https://localhost:3000/api/users/signup', {username: userusername, password: userpassword})
    .subscribe(response =>{
      this.router.navigate(['/login']);
    });
  }

  login (username: string, password:string)
  {
    this.http.post<{token:string}>('https://localhost:3000/api/users/login', {username, password})
    .subscribe(response =>{
      const token = response.token;
      this.token = token;
      localStorage.setItem('token', this.token);
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
    });
  }

  logout () {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getToken()
  {
    return this.token;
  }

  isLoggedIn(){
    const authToken = localStorage.getItem('token');
    if (!authToken) {
      return false;
    }
  
    return true;
  }
}
