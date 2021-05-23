import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CaseService } from '../case.service';

@Component({
  selector: 'app-create-case',
  templateUrl: './create-case.component.html',
  styleUrls: ['./create-case.component.css']
})
export class CreateCaseComponent implements OnInit {

  public id: number;
  formCliente: FormGroup;

  constructor(private caseService: CaseService,
    private router: Router, private formBuilder: FormBuilder,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.createForm();
    this.route.params.subscribe(params => this.id = params['id']);
    if(this.id){
      this.caseService.getById(this.id).subscribe(data =>{
        this.formCliente.patchValue(data);
      })
    }
  }

  saveCase(){
    this.caseService.createCase(this.formCliente.value).subscribe(data =>{
      console.log(data);
      this.goToCaseList();
    },
    error => console.log(error));
  }

  updateCase(){
    this.caseService.updateCase(this.formCliente.value, this.id).subscribe(data =>{
      console.log(data);
      this.goToCaseList();
    },
    error => console.log(error));
  }

  goToCaseList(){
    this.router.navigate(['/cases']);
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
      endereco: ['',Validators.required],
      numero: ['',Validators.required],
      bairro: ['',Validators.required],
      cep: ['',Validators.required],
      cidade: ['',Validators.required],
      uf: ['',Validators.required],
      telefone: ['',Validators.required],
      email: ['',Validators.required]
    })
  }

}
