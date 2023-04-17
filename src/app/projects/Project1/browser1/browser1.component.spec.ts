import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Browser1Component } from './browser1.component';

describe('Browser1Component', () => {
  let component: Browser1Component;
  let fixture: ComponentFixture<Browser1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Browser1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Browser1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
