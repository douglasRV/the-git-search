import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { GitSearchComponent } from './git-search/views/git-search.component';

const routes: Routes = [{
  path: '',
  component: GitSearchComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
