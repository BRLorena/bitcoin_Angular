import {ContentComponent} from './content/content.component';
import { InvestComponent } from './invest/invest.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', component:ContentComponent
  },
  {
    path: 'invest', component: InvestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
