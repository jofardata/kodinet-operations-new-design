import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FretsComponent } from './frets.component';

describe('FretsComponent', () => {
  let component: FretsComponent;
  let fixture: ComponentFixture<FretsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FretsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FretsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
