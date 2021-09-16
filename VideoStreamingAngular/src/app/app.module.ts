import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginModule } from './LoginModule/loginRoutes/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'streams',
        loadChildren: ()=> import('./MainViewModule/mainViewRoutes/mainView.module').then(m => m.MainViewModule)
      },
      {
        path:'',
        loadChildren: () => import('./LoginModule/loginRoutes/login.module').then(m => m.LoginModule)
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
