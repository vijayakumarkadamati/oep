import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminc3Component } from './adminc3.component';

describe('Adminc3Component', () => {
  let component: Adminc3Component;
  let fixture: ComponentFixture<Adminc3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Adminc3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Adminc3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
