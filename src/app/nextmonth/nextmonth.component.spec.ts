import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextmonthComponent } from './nextmonth.component';

describe('NextmonthComponent', () => {
  let component: NextmonthComponent;
  let fixture: ComponentFixture<NextmonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextmonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextmonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
