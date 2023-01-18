import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminc2Component } from './adminc2.component';

describe('Adminc2Component', () => {
  let component: Adminc2Component;
  let fixture: ComponentFixture<Adminc2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Adminc2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Adminc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
