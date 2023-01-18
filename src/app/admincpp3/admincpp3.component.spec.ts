import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Admincpp3Component } from './admincpp3.component';

describe('Admincpp3Component', () => {
  let component: Admincpp3Component;
  let fixture: ComponentFixture<Admincpp3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Admincpp3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Admincpp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
