import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: `app/app.component.html`
})
export class AppComponent{
  myName = 'Josip';

  onSubmit(value: any){
    console.log(value);
  }
}



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