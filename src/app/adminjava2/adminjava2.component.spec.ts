import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminjava2Component } from './adminjava2.component';

describe('Adminjava2Component', () => {
  let component: Adminjava2Component;
  let fixture: ComponentFixture<Adminjava2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Adminjava2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Adminjava2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
