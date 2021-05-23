import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Case } from '../case';
import { CaseService } from '../case.service';

@Component({
  selector: 'app-create-case',
  templateUrl: './create-case.component.html',
  styleUrls: ['./create-case.component.css']
})
export class CreateCaseComponent implements OnInit {

  case: Case = new Case();
  constructor(private caseService: CaseService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveCase(){
    this.caseService.createCase(this.case).subscribe(data =>{
      console.log(data);
      this.goToCaseList();
    },
    error => console.log(error));
  }

  goToCaseList(){
    this.router.navigate(['/cases']);
  }

  onSubmit(){
    console.log(this.case);
    this.saveCase();
  }

}
