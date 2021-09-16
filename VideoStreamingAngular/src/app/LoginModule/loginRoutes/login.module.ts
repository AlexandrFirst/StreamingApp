import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginRoutes } from './login.routing';
import { LoginComponent } from '../loginPages/login/login.component';


@NgModule({
  declarations:[
    LoginComponent
  ],  
  imports: [
    LoginRoutes
  ],
  exports: [
    RouterModule
  ]
})
export class LoginModule { }
