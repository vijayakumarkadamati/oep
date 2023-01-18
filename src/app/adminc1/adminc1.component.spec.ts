import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminc1Component } from './adminc1.component';

describe('Adminc1Component', () => {
  let component: Adminc1Component;
  let fixture: ComponentFixture<Adminc1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Adminc1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Adminc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
