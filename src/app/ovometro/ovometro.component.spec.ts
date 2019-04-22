import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OvometroComponent } from './ovometro.component';

describe('OvometroComponent', () => {
  let component: OvometroComponent;
  let fixture: ComponentFixture<OvometroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvometroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OvometroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
