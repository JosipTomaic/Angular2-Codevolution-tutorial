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
var DepartmentListComponent = (function () {
    function DepartmentListComponent(_route, _router, _departmentService) {
        this._route = _route;
        this._router = _router;
        this._departmentService = _departmentService;
        this.departments = [];
    }
    DepartmentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            var id = parseInt(params['id']);
            _this.selectedId = id;
            _this._departmentService.getDepartments()
                .subscribe(function (resDepartmentData) { return _this.departments = resDepartmentData; }, function (resDepartmentError) { return _this.errorMsg = resDepartmentError; });
        });
    };
    DepartmentListComponent.prototype.onSelect = function (department) {
        this._router.navigate(['/departments', department.id]);
    };
    DepartmentListComponent.prototype.isSelected = function (department) {
        return department.id === this.selectedId;
    };
    return DepartmentListComponent;
}());
DepartmentListComponent = __decorate([
    core_1.Component({
        selector: 'department-list',
        template: "<h3>Departmet list</h3>\n            <h4>{{errorMsg}}</h4>\n            <ul class=\"items\">\n                <li (click)=\"onSelect(department)\" [class.selected] = \"isSelected(department)\" *ngFor=\"let department of departments\">\n                    <span class=\"badge\">{{department.id}}</span>{{department.name}}\n                </li>\n            </ul>\n  "
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, department_service_1.DepartmentService])
], DepartmentListComponent);
exports.DepartmentListComponent = DepartmentListComponent;
//# sourceMappingURL=department-list.component.js.map