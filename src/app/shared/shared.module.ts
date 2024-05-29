import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StampComponent } from './components/stamp/stamp.component';
import { CoreModule } from '../core/core.module';
import { BoxComponent } from './components/box/box.component';
import { CustomStampComponent } from './components/custom-stamp/custom-stamp.component';



@NgModule({
  declarations: [
    StampComponent,
    BoxComponent,
    CustomStampComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    StampComponent,
    BoxComponent,
    CustomStampComponent
  ]
})
export class SharedModule { }
