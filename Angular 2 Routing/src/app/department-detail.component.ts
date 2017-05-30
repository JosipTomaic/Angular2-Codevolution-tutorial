import { Component, OnInit } from '@angular/core';
import { DepartmentService } from './department.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'department-detail',
  template: `<h3>Departmet detail (ID: {{departmentId}})</h3>
            <h4 *ngFor="let department of selectedDepartment">ID and Name:{{department.id}}. {{department.name}}</h4>
            <a (click)="goPrevious()">Previous</a>
            <a (click)="goNext()">Next</a>
            <p>
                <button (click)="gotoDepartments()">Back</button>
            </p>
  `
})
export class DepartmentDetailComponent implements OnInit{
    public departmentId: any;
    public selectedDepartment: any = [];
    public departments: any = [];
    errorMsg: string;

    constructor(private _route: ActivatedRoute, private _router: Router, private _departmentService: DepartmentService){}

    ngOnInit(){
        this._route.params.subscribe((params: Params) => {
            let id = parseInt(params['id']);
            this.departmentId = id;
            this._departmentService.getDepartments()
                .subscribe(resDepartmentData => {
                    this.departments = resDepartmentData;
                    this.selectedDepartment = this.departments.filter((x : any) => x.id === this.departmentId);
                },
                resDepartmentError => this.errorMsg = resDepartmentError);
        });
    }

    goPrevious(){
        if(this.departmentId > 1){
            let previousId = this.departmentId - 1;
            this._router.navigate(['/departments', previousId]);
        }
    }

    goNext(){
        if(this.departmentId < this.departments.length){
            let nextId = this.departmentId + 1;
            this._router.navigate(['/departments', nextId]);
        }
    }

    gotoDepartments(){
        let selectedId = this.departmentId? this.departmentId : null;
        this._router.navigate(['/departments', {id: selectedId}]);
    }
}