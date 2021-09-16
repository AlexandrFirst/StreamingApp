import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../loginPages/login/login.component';

const routes: Routes = [
  {path:'login', component: LoginComponent  },
  {path: '', redirectTo: 'login'},
  {path: '**', redirectTo: 'login'}
];

export const LoginRoutes = RouterModule.forChild(routes);
