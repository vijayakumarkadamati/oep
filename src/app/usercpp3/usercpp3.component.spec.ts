import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Usercpp3Component } from './usercpp3.component';

describe('Usercpp3Component', () => {
  let component: Usercpp3Component;
  let fixture: ComponentFixture<Usercpp3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Usercpp3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Usercpp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
