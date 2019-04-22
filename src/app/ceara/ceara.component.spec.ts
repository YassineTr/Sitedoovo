import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CearaComponent } from './ceara.component';

describe('CearaComponent', () => {
  let component: CearaComponent;
  let fixture: ComponentFixture<CearaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CearaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CearaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
