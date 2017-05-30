"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var employee_service_1 = require("./employee.service");
var router_1 = require("@angular/router");
var EmployeeListComponent = (function () {
    function EmployeeListComponent(_route, _employeeService, _router) {
        this._route = _route;
        this._employeeService = _employeeService;
        this._router = _router;
        this.employees = [];
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            var id = parseInt(params['id']);
            _this.selectedId = id;
            _this._employeeService.getEmployees()
                .subscribe(function (resEmployeeData) { return _this.employees = resEmployeeData; }, function (resEmployeeError) { return _this.errorMsg = resEmployeeError; });
        });
    };
    EmployeeListComponent.prototype.onSelect = function (employee) {
        this._router.navigate(['/employees', employee.id]);
    };
    EmployeeListComponent.prototype.isSelected = function (department) {
        return department.id === this.selectedId;
    };
    return EmployeeListComponent;
}());
EmployeeListComponent = __decorate([
    core_1.Component({
        selector: 'employee-list',
        template: "<h3>Employee list</h3>\n            <h4>{{errorMsg}}</h4>\n            <ul class=\"items\">\n                <li (click)=\"onSelect(employee)\" [class.selected] = \"isSelected(employee)\" *ngFor=\"let employee of employees\">\n                    <span class=\"badge\">{{employee.id}}</span>{{employee.name}}\n                </li>\n            </ul>\n"
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, employee_service_1.EmployeeService, router_1.Router])
], EmployeeListComponent);
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employee-list.component.js.map