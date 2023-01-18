import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminjava1Component } from './adminjava1.component';

describe('Adminjava1Component', () => {
  let component: Adminjava1Component;
  let fixture: ComponentFixture<Adminjava1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Adminjava1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Adminjava1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
