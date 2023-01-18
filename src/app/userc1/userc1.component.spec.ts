import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Userc1Component } from './userc1.component';

describe('Userc1Component', () => {
  let component: Userc1Component;
  let fixture: ComponentFixture<Userc1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Userc1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Userc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
