import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Main6Component } from './main6.component';

describe('Main6Component', () => {
  let component: Main6Component;
  let fixture: ComponentFixture<Main6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Main6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Main6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
