import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeListComponent } from './employee-list.component';
import { DepartmentListComponent } from './department-list.component';
import { DepartmentDetailComponent } from './department-detail.component';
import { EmployeeDetailComponent } from './employee-detail.component';

const routes: Routes = [
    {path: "departments", component: DepartmentListComponent},
    {path: "employees", component: EmployeeListComponent},
    {path: "departments/:id", component: DepartmentDetailComponent},
    {path: "employees/:id", component: EmployeeDetailComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
export const routingComponents = [ DepartmentListComponent, EmployeeListComponent, DepartmentDetailComponent, EmployeeDetailComponent ]