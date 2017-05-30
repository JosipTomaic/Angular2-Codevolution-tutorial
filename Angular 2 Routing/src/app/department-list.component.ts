import { Component, OnInit} from '@angular/core';
import { DepartmentService } from './department.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'department-list',
  template: `<h3>Departmet list</h3>
            <h4>{{errorMsg}}</h4>
            <ul class="items">
                <li (click)="onSelect(department)" [class.selected] = "isSelected(department)" *ngFor="let department of departments">
                    <span class="badge">{{department.id}}</span>{{department.name}}
                </li>
            </ul>
  `
})
export class DepartmentListComponent implements OnInit{
    departments: any = [];
    selectedId: any;
    errorMsg: string;

    constructor(private _route: ActivatedRoute, private _router: Router, private _departmentService: DepartmentService){}

    ngOnInit(){
        this._route.params.subscribe((params: Params) => {
            let id = parseInt(params['id']);
            this.selectedId = id;
            this._departmentService.getDepartments()
                .subscribe(resDepartmentData => this.departments = resDepartmentData,
                            resDepartmentError => this.errorMsg = resDepartmentError);
        });
    }

    onSelect(department:any){
        this._router.navigate(['/departments', department.id]);
    }

    isSelected(department:any){
        return department.id === this.selectedId;
    }   
}