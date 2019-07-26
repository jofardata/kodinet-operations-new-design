import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GopassListComponent } from './gopass-list.component';

describe('GopassListComponent', () => {
  let component: GopassListComponent;
  let fixture: ComponentFixture<GopassListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GopassListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GopassListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
