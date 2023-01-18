import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Userc3Component } from './userc3.component';

describe('Userc3Component', () => {
  let component: Userc3Component;
  let fixture: ComponentFixture<Userc3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Userc3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Userc3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
