import { Route } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginComponent } from './containers/login/login.component';

export const authRoutes: Route[] = [
  { path: 'login', component: LoginComponent },
  { path: 'loginForm', component: LoginFormComponent }

];
