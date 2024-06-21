import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
