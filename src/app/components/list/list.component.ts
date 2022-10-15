import { Component, Input, OnInit } from '@angular/core';
import { ClientModel } from 'src/app/models/clientModel';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  client!: ClientModel[];
    
  cols!: any[];

  _selectedColumns!: any[];

  constructor(
    private service:RestService
  ) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((data) => (this.client = data));

    this.cols = [
        { field: 'name', header: 'Nome' },
        { field: 'email', header: 'Email' },
        { field: 'birthDay', header: 'Data Nascimento', format: 'dd/MM/YYYY'},
        { field: 'password', header: 'Senha'},
        { field: 'address', header: 'Endereço'},
        { field: 'phone_number', header: 'Telefone'},
        { field: 'spouse', header: 'Cônjuge'},
        { field: 'son_name', header: 'Nome do filho'}
    ];

    this._selectedColumns = this.cols;
  }

  @Input() get selectedColumns(): any[] {
    return this._selectedColumns;
  }

  set selectedColumns(val: any[]) {
    //restore original order
    this._selectedColumns = this.cols.filter(col => val.includes(col));
  }
}
