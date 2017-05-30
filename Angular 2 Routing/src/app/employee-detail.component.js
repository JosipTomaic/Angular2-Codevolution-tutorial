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
var EmployeeDetailComponent = (function () {
    function EmployeeDetailComponent(_route, _router, _employeeService) {
        this._route = _route;
        this._router = _router;
        this._employeeService = _employeeService;
        this.selectedEmployee = [];
        this.employees = [];
    }
    EmployeeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            var id = parseInt(params['id']);
            _this.employeeId = id;
            _this._employeeService.getEmployees()
                .subscribe(function (resEmployeeData) {
                _this.employees = resEmployeeData;
                _this.selectedEmployee = _this.employees.filter(function (x) { return x.id === _this.employeeId; });
            }, function (resEmployeeError) { return _this.errorMsg = resEmployeeError; });
        });
    };
    EmployeeDetailComponent.prototype.goPrevious = function () {
        if (this.employeeId > 1) {
            var previousId = this.employeeId - 1;
            this._router.navigate(['/employees', previousId]);
        }
    };
    EmployeeDetailComponent.prototype.goNext = function () {
        if (this.employeeId < this.employees.length) {
            var nextId = this.employeeId + 1;
            this._router.navigate(['/employees', nextId]);
        }
    };
    EmployeeDetailComponent.prototype.gotoEmployees = function () {
        var selectedId = this.employeeId ? this.employeeId : null;
        this._router.navigate(['/employees', { id: selectedId }]);
    };
    return EmployeeDetailComponent;
}());
EmployeeDetailComponent = __decorate([
    core_1.Component({
        selector: 'employee-detail',
        template: "<h3>Employee detail (ID: {{employeeId}})</h3>\n            <h4 *ngFor=\"let employee of selectedEmployee\">ID and Name:{{employee.id}}. {{employee.name}}</h4>\n            <a (click)=\"goPrevious()\">Previous</a>\n            <a (click)=\"goNext()\">Next</a>\n            <p>\n                <button (click)=\"gotoEmployees()\">Back</button>\n            </p>\n  "
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, employee_service_1.EmployeeService])
], EmployeeDetailComponent);
exports.EmployeeDetailComponent = EmployeeDetailComponent;
//# sourceMappingURL=employee-detail.component.js.map