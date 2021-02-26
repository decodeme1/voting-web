import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [

  {path: '', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)},
  {path: 'voting', loadChildren: () => import('./modules/voting/voting.module').then(m => m.VotingModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
