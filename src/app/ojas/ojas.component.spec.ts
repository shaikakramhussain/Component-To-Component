import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OjasComponent } from './ojas.component';

describe('OjasComponent', () => {
  let component: OjasComponent;
  let fixture: ComponentFixture<OjasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OjasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OjasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
