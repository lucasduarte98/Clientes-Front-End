import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../cliente'
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: ClienteService,
    private router: Router) { }

  ngOnInit(): void {
    this.getClientes();

  }

  private getClientes(){
    this.clienteService.getClientesList().subscribe(data => {
      this.clientes = data;
    });
  }
  updateCliente(id: number){
    this.router.navigate(['update-cliente', id]);
  }

  updateStatus(id: number){
    this.clienteService.updateStatus(id).subscribe(data => {
      this.ngOnInit();
    });
    
  }
}
