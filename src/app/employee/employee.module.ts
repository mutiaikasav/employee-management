import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesign } from '../material/material';
import { NgSelect2Module } from 'ng-select2';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';


const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    children: [
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'add',
        component: AddComponent
      },
      {
        path: 'detail',
        component: DetailComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    EmployeeComponent,
    ListComponent,
    AddComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign,
    NgSelect2Module,
    FormsModule,
    DataTablesModule
  ]
})
export class EmployeeModule { }
