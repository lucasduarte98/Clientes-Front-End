import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Case } from '../case'
import { CaseService } from '../case.service';

@Component({
  selector: 'app-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.css']
})
export class CaseListComponent implements OnInit {

  cases: Case[];

  constructor(private caseService: CaseService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCases();

  }

  private getCases(){
    this.caseService.getCasesList().subscribe(data => {
      this.cases = data;
    });
  }
  updateCase(id: number){
    this.router.navigate(['update-case', id]);
  }

  updateStatus(id: number){
    this.caseService.updateStatus(id).subscribe();
  }
}
