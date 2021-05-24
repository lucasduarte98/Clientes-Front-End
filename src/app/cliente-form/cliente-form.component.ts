import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  public id: number;
  formCliente: FormGroup;

  constructor(private clienteService: ClienteService,
    private router: Router, private formBuilder: FormBuilder,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.createForm();
    this.route.params.subscribe(params => this.id = params['id']);
    if(this.id){
      this.clienteService.getById(this.id).subscribe(data =>{
        this.formCliente.patchValue(data);
      })
    }
  }

  saveCase(){
    this.clienteService.create(this.formCliente.value).subscribe(data =>{
      this.goToCaseList();
    },
    error => alert(error.error.message));
  }

  updateCase(){
    this.clienteService.update(this.formCliente.value, this.id).subscribe(data =>{
      this.goToCaseList();
    },
    error => alert(error.error.message));
  }

  goToCaseList(){
    this.router.navigate(['/clientes']);
  }

  onSubmit(){
    if(this.id){
      this.updateCase();  
    } else{
    this.saveCase();
    }
  }

  createForm() {
    this.formCliente = this.formBuilder.group({
      name: ['',Validators.required],
      cpfCnpj: ['',Validators.required],
      endereco: [''],
      numero: [''],
      bairro: [''],
      cep: [''],
      cidade: [''],
      uf: [''],
      telefone: [''],
      email: ['']
    })
  }

}
