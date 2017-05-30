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
var department_service_1 = require("./department.service");
var router_1 = require("@angular/router");
var DepartmentDetailComponent = (function () {
    function DepartmentDetailComponent(_route, _router, _departmentService) {
        this._route = _route;
        this._router = _router;
        this._departmentService = _departmentService;
        this.selectedDepartment = [];
        this.departments = [];
    }
    DepartmentDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            var id = parseInt(params['id']);
            _this.departmentId = id;
            _this._departmentService.getDepartments()
                .subscribe(function (resDepartmentData) {
                _this.departments = resDepartmentData;
                _this.selectedDepartment = _this.departments.filter(function (x) { return x.id === _this.departmentId; });
            }, function (resDepartmentError) { return _this.errorMsg = resDepartmentError; });
        });
    };
    DepartmentDetailComponent.prototype.goPrevious = function () {
        if (this.departmentId > 1) {
            var previousId = this.departmentId - 1;
            this._router.navigate(['/departments', previousId]);
        }
    };
    DepartmentDetailComponent.prototype.goNext = function () {
        if (this.departmentId < this.departments.length) {
            var nextId = this.departmentId + 1;
            this._router.navigate(['/departments', nextId]);
        }
    };
    DepartmentDetailComponent.prototype.gotoDepartments = function () {
        var selectedId = this.departmentId ? this.departmentId : null;
        this._router.navigate(['/departments', { id: selectedId }]);
    };
    return DepartmentDetailComponent;
}());
DepartmentDetailComponent = __decorate([
    core_1.Component({
        selector: 'department-detail',
        template: "<h3>Departmet detail (ID: {{departmentId}})</h3>\n            <h4 *ngFor=\"let department of selectedDepartment\">ID and Name:{{department.id}}. {{department.name}}</h4>\n            <a (click)=\"goPrevious()\">Previous</a>\n            <a (click)=\"goNext()\">Next</a>\n            <p>\n                <button (click)=\"gotoDepartments()\">Back</button>\n            </p>\n  "
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, department_service_1.DepartmentService])
], DepartmentDetailComponent);
exports.DepartmentDetailComponent = DepartmentDetailComponent;
//# sourceMappingURL=department-detail.component.js.map