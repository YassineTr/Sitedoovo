import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaopauloComponent } from './saopaulo.component';

describe('SaopauloComponent', () => {
  let component: SaopauloComponent;
  let fixture: ComponentFixture<SaopauloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaopauloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaopauloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
