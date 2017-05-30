import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'employee-detail',
  template: `<h3>Employee detail (ID: {{employeeId}})</h3>
            <h4 *ngFor="let employee of selectedEmployee">ID and Name:{{employee.id}}. {{employee.name}}</h4>
            <a (click)="goPrevious()">Previous</a>
            <a (click)="goNext()">Next</a>
            <p>
                <button (click)="gotoEmployees()">Back</button>
            </p>
  `
})

export class EmployeeDetailComponent implements OnInit{
    public employeeId: any;
    public selectedEmployee: any = [];
    public employees: any = [];
    errorMsg: string;

    constructor(private _route: ActivatedRoute, private _router: Router, private _employeeService: EmployeeService){}

    ngOnInit(){
        this._route.params.subscribe((params: Params) => {
            let id = parseInt(params['id']);
            this.employeeId = id;
            this._employeeService.getEmployees()
                .subscribe(resEmployeeData => {
                    this.employees = resEmployeeData;
                    this.selectedEmployee = this.employees.filter((x : any) => x.id === this.employeeId);
                },
                resEmployeeError => this.errorMsg = resEmployeeError);
        });
    }

    goPrevious(){
        if(this.employeeId > 1){
            let previousId = this.employeeId - 1;
            this._router.navigate(['/employees', previousId]);
        }
    }

    goNext(){
        if(this.employeeId < this.employees.length){
            let nextId = this.employeeId + 1;
            this._router.navigate(['/employees', nextId]);
        }
    }

    gotoEmployees(){
        let selectedId = this.employeeId? this.employeeId : null;
        this._router.navigate(['/employees', {id: selectedId}]);
    }
}