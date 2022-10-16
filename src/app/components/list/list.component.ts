import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ClientModel } from 'src/app/models/clientModel';
import { RestService } from 'src/app/services/rest.service';
import { ViacepService } from 'src/app/services/viacep.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit,OnChanges {

  client!: ClientModel;

  clientClean!: ClientModel;

  clientDialog!: boolean;

  clients!: ClientModel[];


  selectedClients!: ClientModel[];
  cleanSelectedClients!: ClientModel[];

  submitted!: boolean;

  statuses!: any[];

  constructor(
    private service: RestService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private viaCep: ViacepService,
  ) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.fillAddress(this.client.address);
  }

  ngOnInit(): void {    
    this.service.getAll().subscribe((data) => (this.clients = data));
  }

    openNew(client: ClientModel) {
    this.client = { ...client };
    this.clientDialog = true;
  }
  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.clients = this.clients.filter(val => !this.selectedClients.includes(val));
        this.selectedClients = this.cleanSelectedClients;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Clientes Deletado', life: 3000 });
      }
    });
  }

  editProduct(client: ClientModel) {
    let date = new Date(client.birthDay).toLocaleDateString('en-GB')
    client.birthDay = date
    this.client = { ...client };
    this.clientDialog = true;
  }

  deleteProduct(client: ClientModel) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + client.id + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.clients = this.clients.filter(val => val.id !== client.id);
        this.client = this.clientClean;
        this.service.delete(client.id).subscribe();
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Cliente Deletado', life: 3000 });
      }
    });
  }

  hideDialog() {
    this.client = this.clientClean;
    this.clientDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;

    if (this.client.name.trim()) {
      if (this.client.id) {
        this.clients[this.findIndexById(this.client.id)] = this.client;
        this.service.edit(this.client).subscribe();
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Client Updated', life: 3000 });
      }
      else {
        let date = new Date(this.client.birthDay);
        this.client.birthDay = date.toISOString().substring(0, 10);
        this.service.add(this.client).subscribe((data)=>{
          console.log(data);
          
        });
        this.clients.push(this.client);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Client Created', life: 3000 });
      }

      this.clients = [...this.clients];
      this.clientDialog = false;
      this.client = this.clientClean;
    }
  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.clients.length; i++) {
      if (this.clients[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  fillAddress(zip_code : string){
    this.viaCep.findAddress(zip_code).subscribe((data)=>{
      this.client.address = data.logradouro
    });
    return this.client.address;
  }

}
