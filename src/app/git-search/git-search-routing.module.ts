
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { GitSearchComponent } from './views/git-search.component';

const routes: Routes = [
  { path: '', component: GitSearchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class GitSearchRoutingModule { }
