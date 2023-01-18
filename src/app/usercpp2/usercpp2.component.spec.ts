import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Usercpp2Component } from './usercpp2.component';

describe('Usercpp2Component', () => {
  let component: Usercpp2Component;
  let fixture: ComponentFixture<Usercpp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Usercpp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Usercpp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
