import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaranhoComponent } from './maranho.component';

describe('MaranhoComponent', () => {
  let component: MaranhoComponent;
  let fixture: ComponentFixture<MaranhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaranhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaranhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
