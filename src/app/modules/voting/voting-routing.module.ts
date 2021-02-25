import { NgModule } from '@angular/core';
import {Routes} from '@angular/router';



const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: '', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VotingRoutingModule { }
