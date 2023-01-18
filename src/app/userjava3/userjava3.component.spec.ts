import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Userjava3Component } from './userjava3.component';

describe('Userjava3Component', () => {
  let component: Userjava3Component;
  let fixture: ComponentFixture<Userjava3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Userjava3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Userjava3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
