import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Main11Component } from './main11.component';

describe('Main11Component', () => {
  let component: Main11Component;
  let fixture: ComponentFixture<Main11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Main11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Main11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
