import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm!: FormGroup;
    
    submitted = false;
    
  constructor(
    private service : RestService
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
  });
  }

  onSubmit(){
    console.log("enviado");
    
    alert(JSON.stringify(this.loginForm.value));
  }
}
