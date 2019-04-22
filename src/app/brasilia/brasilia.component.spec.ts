import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrasiliaComponent } from './brasilia.component';

describe('BrasiliaComponent', () => {
  let component: BrasiliaComponent;
  let fixture: ComponentFixture<BrasiliaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrasiliaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrasiliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
