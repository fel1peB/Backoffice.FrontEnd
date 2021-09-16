import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule }   from '@angular/forms';
import { ColaboradorRoutingModule } from './colaborador-routing.module';
import { EmployeeService} from '../../core/component/service/EmployeeService';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ColaboradorRoutingModule,
    ReactiveFormsModule
  ],
  providers:[
    EmployeeService
  ]
})
export class ColaboradorModule { }
