import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Admincpp1Component } from './admincpp1.component';

describe('Admincpp1Component', () => {
  let component: Admincpp1Component;
  let fixture: ComponentFixture<Admincpp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Admincpp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Admincpp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
