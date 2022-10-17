import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UserModel } from 'src/app/models/userModel';
import { RestService } from 'src/app/services/rest.service';
import { ViacepService } from 'src/app/services/viacep.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit,OnChanges {
  
  user : UserModel = new Input;

  constructor(
    private service: RestService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private viaCep: ViacepService,
    private router : Router
  ) { }

  ngOnInit(): void {
    
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.fillAddress(this.user.zip_code);
  }

  fillAddress(zip_code : string){
    this.viaCep.findAddress(zip_code).subscribe((data)=>{
      this.user.address = data.logradouro
      this.user.city_name = data.localidade
      this.user.state_name = data.uf
    });    
    return this.user;
  }

  send(user :UserModel){
    this.service.addUser(user).subscribe(
      )
      this.router.navigate(['login']);
  }
}
