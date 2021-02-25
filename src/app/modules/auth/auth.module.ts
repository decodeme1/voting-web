import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import {AuthRotingModule} from './auth-roting.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRotingModule
  ]
})
export class AuthModule { }
