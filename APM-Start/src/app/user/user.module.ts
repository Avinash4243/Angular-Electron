import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';

import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class UserModule { }
