import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ojas1Component } from './ojas1.component';

describe('Ojas1Component', () => {
  let component: Ojas1Component;
  let fixture: ComponentFixture<Ojas1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ojas1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ojas1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
