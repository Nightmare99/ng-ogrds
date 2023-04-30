import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Explorer1Component } from './explorer1.component';

describe('Explorer1Component', () => {
  let component: Explorer1Component;
  let fixture: ComponentFixture<Explorer1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Explorer1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Explorer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
