import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {VotingFormComponent} from './voting-form/voting-form.component';
import {VotingListComponent} from './voting-list/voting-list.component';

const routes: Routes = [

  { path: '', component: VotingFormComponent },
  { path: 'votes', component: VotingListComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VotingRoutingModule { }
