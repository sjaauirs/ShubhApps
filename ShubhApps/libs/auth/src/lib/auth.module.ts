import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterModule, Route } from '@angular/router';
import { authRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(authRoutes), RouterModule],
})
export class AuthModule {}
