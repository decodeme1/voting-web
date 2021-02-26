import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VotesListComponent } from './votes-list/votes-list.component';
import { VotesFormComponent } from './votes-form/votes-form.component';



@NgModule({
  declarations: [VotesListComponent, VotesFormComponent],
  imports: [
    CommonModule
  ]
})
export class VotesModule { }
