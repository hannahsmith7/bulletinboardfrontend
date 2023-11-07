import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from './auth/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';

  constructor(public authservice: AuthServiceService) {}
  
  logout()
  {
    this.authservice.logout();
  }

  get isLoggedIn(): boolean 
  {
    return this.authservice.isLoggedIn();
  }
}
