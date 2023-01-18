import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiduemComponent } from './miduem.component';

describe('MiduemComponent', () => {
  let component: MiduemComponent;
  let fixture: ComponentFixture<MiduemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiduemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiduemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
