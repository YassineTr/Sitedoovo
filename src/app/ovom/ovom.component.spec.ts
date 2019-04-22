import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OvomComponent } from './ovom.component';

describe('OvomComponent', () => {
  let component: OvomComponent;
  let fixture: ComponentFixture<OvomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OvomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
