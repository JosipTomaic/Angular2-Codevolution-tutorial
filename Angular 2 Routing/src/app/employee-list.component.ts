import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'employee-list',
  template: `<h3>Employee list</h3>
            <h4>{{errorMsg}}</h4>
            <ul class="items">
                <li (click)="onSelect(employee)" [class.selected] = "isSelected(employee)" *ngFor="let employee of employees">
                    <span class="badge">{{employee.id}}</span>{{employee.name}}
                </li>
            </ul>
`
})
export class EmployeeListComponent implements OnInit  {
    selectedId: any;
    employees: any = [];
    errorMsg: string;

    constructor(private _route: ActivatedRoute, private _employeeService: EmployeeService, private _router: Router){}

    ngOnInit(){
        this._route.params.subscribe((params: Params) => {
            let id = parseInt(params['id']);
            this.selectedId = id;
            this._employeeService.getEmployees()
                .subscribe(resEmployeeData => this.employees = resEmployeeData,
                        resEmployeeError => this.errorMsg = resEmployeeError);
        });
    }

    onSelect(employee: any){
        this._router.navigate(['/employees', employee.id]);
    }

    isSelected(department:any){
        return department.id === this.selectedId;
    }
}