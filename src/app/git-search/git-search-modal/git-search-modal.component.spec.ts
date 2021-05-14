import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitSearchModalComponent } from './git-search-modal.component';

describe('GitSearchModalComponent', () => {
  let component: GitSearchModalComponent;
  let fixture: ComponentFixture<GitSearchModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitSearchModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitSearchModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
