import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OvoComponent } from './ovo.component';

describe('OvoComponent', () => {
  let component: OvoComponent;
  let fixture: ComponentFixture<OvoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OvoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
