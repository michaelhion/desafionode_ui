import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtModel } from '../models/jwt.mode';
import { AuthService } from '../services/auth.service';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  jwtModel: JwtModel = new Input;
    
  constructor(
    private service : RestService,
    private authService : AuthService,
    private router :Router
  ) { }

  ngOnInit(): void {
  }

  login(jwtModel : JwtModel){
    this.service.login(jwtModel.username,jwtModel.password).subscribe(
      (data)=> localStorage.setItem('token', data.access_token),
      
      
      
      );
    this.router.navigate(['home'])
    this.authService.isAuthenticated();
  }
}
