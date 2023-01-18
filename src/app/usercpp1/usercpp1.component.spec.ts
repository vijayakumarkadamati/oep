import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Usercpp1Component } from './usercpp1.component';

describe('Usercpp1Component', () => {
  let component: Usercpp1Component;
  let fixture: ComponentFixture<Usercpp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Usercpp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Usercpp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
