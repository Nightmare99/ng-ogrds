import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeICBrowserComponent } from './fake-icbrowser.component';

describe('FakeICBrowserComponent', () => {
  let component: FakeICBrowserComponent;
  let fixture: ComponentFixture<FakeICBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakeICBrowserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FakeICBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
