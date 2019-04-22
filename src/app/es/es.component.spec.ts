import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ESComponent } from './es.component';

describe('ESComponent', () => {
  let component: ESComponent;
  let fixture: ComponentFixture<ESComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ESComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
