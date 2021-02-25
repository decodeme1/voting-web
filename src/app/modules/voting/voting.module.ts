import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {VotingFormComponent} from './voting-form/voting-form.component';
import {VotingListComponent} from './voting-list/voting-list.component';
import {VotingRoutingModule} from './voting-routing.module';


@NgModule({
  declarations: [VotingFormComponent, VotingListComponent],
  imports: [
    CommonModule,
    VotingRoutingModule
  ]
})
export class VotingModule {
}
