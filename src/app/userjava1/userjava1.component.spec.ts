import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Userjava1Component } from './userjava1.component';

describe('Userjava1Component', () => {
  let component: Userjava1Component;
  let fixture: ComponentFixture<Userjava1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Userjava1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Userjava1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
