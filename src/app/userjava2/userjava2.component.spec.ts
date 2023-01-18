import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Userjava2Component } from './userjava2.component';

describe('Userjava2Component', () => {
  let component: Userjava2Component;
  let fixture: ComponentFixture<Userjava2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Userjava2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Userjava2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
