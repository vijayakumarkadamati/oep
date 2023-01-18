import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Userc2Component } from './userc2.component';

describe('Userc2Component', () => {
  let component: Userc2Component;
  let fixture: ComponentFixture<Userc2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Userc2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Userc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
