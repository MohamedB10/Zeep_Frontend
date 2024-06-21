import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { BoxComponent } from './components/box/box.component';
import { CustomStampComponent } from './components/custom-stamp/custom-stamp.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { StampComponent } from './components/stamp/stamp.component';


@NgModule({
  declarations: [
    BoxComponent,
    CustomStampComponent,
    LandingPageComponent,
    StampComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule,
    CoreModule
  ],
  exports: [
    BoxComponent,
    CustomStampComponent,
    LandingPageComponent,
    StampComponent
  ]
})
export class PublicModule { }
