import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'employee-list',
  template: `<h2>Employee List</h2>
             <h3>{{errorMsg}}</h3>
             <ul *ngFor="let employee of employees">
                <li>{{employee.name}}</li>
             </ul>`
})
export class EmployeeListComponent implements OnInit{ 
    errorMsg: string;
    employees = [];
    
    constructor(private _employeeService: EmployeeService){

    }

    ngOnInit(){
        this._employeeService.getEmployees()
            .subscribe(resEmployeeData => this.employees = resEmployeeData,
                        resEmployeeError => this.errorMsg = resEmployeeError);
    }
}

//26. video - Using a Service
//     ngOnInit(){
//         this.employees = this._employeeService.getEmployees();
//     }