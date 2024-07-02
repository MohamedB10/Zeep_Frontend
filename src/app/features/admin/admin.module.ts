import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { ListStampsComponent } from './components/list-stamps/list-stamps.component';
import { ListBoxsComponent } from './components/list-boxs/list-boxs.component';
import { EditStampComponent } from './components/edit-stamp/edit-stamp.component';
import { EditBoxComponent } from './components/edit-box/edit-box.component';



@NgModule({
  declarations: [
    AdminComponent,
    ListStampsComponent,
    ListBoxsComponent,
    EditStampComponent,
    EditBoxComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
