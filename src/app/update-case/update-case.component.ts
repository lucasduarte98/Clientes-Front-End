import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Case } from '../case'
import { CaseService } from '../case.service';

@Component({
  selector: 'app-update-case',
  templateUrl: './update-case.component.html',
  styleUrls: ['./update-case.component.css']
})
export class UpdateCaseComponent implements OnInit {
public id: number;
  case: Case = new Case();
  constructor(private caseService: CaseService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.id = params['id']);
    this.caseService.getById(this.id).subscribe(data =>{
      this.case = data;
    })
  }

  updateCase(){
    this.caseService.updateCase(this.case, this.id).subscribe(data =>{
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
    this.updateCase();
  }
}