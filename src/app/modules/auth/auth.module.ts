import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import {AuthRotingModule} from './auth-roting.module';
import {SharedModule} from '../../shared.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRotingModule,
    SharedModule,
    FormsModule
  ]
})
export class AuthModule { }
