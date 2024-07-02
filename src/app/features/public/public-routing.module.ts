import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { StampComponent } from './components/stamp/stamp.component';
import { BoxComponent } from './components/box/box.component';
import { CustomStampComponent } from './components/custom-stamp/custom-stamp.component';

const routes: Routes = [
  { path: '', component: PublicComponent,
    children: [
      { path: 'stamps', component: StampComponent },
      { path: 'boxs', component: BoxComponent },
      { path: 'edit-stamp', component: CustomStampComponent }
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
