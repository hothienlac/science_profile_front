import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirePasswordComponent } from './require-password.component';

describe('RequirePasswordComponent', () => {
  let component: RequirePasswordComponent;
  let fixture: ComponentFixture<RequirePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequirePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
