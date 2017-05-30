"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.myName = 'Josip';
    }
    AppComponent.prototype.onSubmit = function (value) {
        console.log(value);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: "app/app.component.html"
    })
], AppComponent);
exports.AppComponent = AppComponent;
// import { Component } from '@angular/core';
// @Component({
//   selector: 'my-app',
//   template: `<h1>Hello {{name}}</h1>`,
// })
// export class AppComponent{
//   name = 'Angular';
// }
// 16. video - Final Release
// U APPCOMPONENT:
// import { Component } from '@angular/core';
// @Component({
//   selector: 'my-app',
//   template: `<h1>Hello {{name}}</h1>
//             <sub-app></sub-app>`,
// })
// export class AppComponent{
//   name = 'Angular';
// }
// U APPMODULE:
// import { NgModule }      from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppComponent }  from './app.component';
// import { SubComponent }  from './sub.component';
// @NgModule({
//   imports:      [ BrowserModule ],
//   declarations: [ AppComponent, SubComponent ],
//   bootstrap:    [ AppComponent ]
// })
// export class AppModule { } 
//# sourceMappingURL=app.component.js.map