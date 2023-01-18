import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminjava3Component } from './adminjava3.component';

describe('Adminjava3Component', () => {
  let component: Adminjava3Component;
  let fixture: ComponentFixture<Adminjava3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Adminjava3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Adminjava3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
