import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserperformComponent } from './userperform.component';

describe('UserperformComponent', () => {
  let component: UserperformComponent;
  let fixture: ComponentFixture<UserperformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserperformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserperformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
