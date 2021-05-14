import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Components
import { GitSearchComponent } from './views/git-search.component';
import { GitSearchRoutingModule } from './git-search-routing.module';
import { GitSearchModalComponent } from './git-search-modal/git-search-modal.component';

@NgModule({
  declarations: [
    GitSearchComponent,
    GitSearchModalComponent
  ],
  entryComponents: [
    GitSearchModalComponent
  ],
  imports: [
    CommonModule,
    GitSearchRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    InfiniteScrollModule
  ]
})
export class GitSearchModule { }
