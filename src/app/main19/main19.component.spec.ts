import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Main19Component } from './main19.component';

describe('Main19Component', () => {
  let component: Main19Component;
  let fixture: ComponentFixture<Main19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Main19Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Main19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
