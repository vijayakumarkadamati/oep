import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Admincpp2Component } from './admincpp2.component';

describe('Admincpp2Component', () => {
  let component: Admincpp2Component;
  let fixture: ComponentFixture<Admincpp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Admincpp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Admincpp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
