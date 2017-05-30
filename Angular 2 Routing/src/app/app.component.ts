import { Component } from '@angular/core';
import { DepartmentService } from './department.service';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'my-app',
  template: `<h1>Routing Application</h1>
            <nav>
              <a routerLink="/departments">Departments</a>
              <a routerLink="/employees">Employees</a>
            </nav>
            <router-outlet></router-outlet>
  `,
  providers: [DepartmentService, EmployeeService]
})
export class AppComponent  {}
