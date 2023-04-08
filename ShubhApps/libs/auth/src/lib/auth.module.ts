import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterModule, Route } from '@angular/router';
import { authRoutes } from './lib.routes';
import { LoginComponent } from './containers/login/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form/login-form.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(authRoutes), RouterModule],
  declarations: [LoginComponent, LoginFormComponent],
})
export class AuthModule {}
