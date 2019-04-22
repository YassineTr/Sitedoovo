import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SantaCaComponent } from './santa-ca.component';

describe('SantaCaComponent', () => {
  let component: SantaCaComponent;
  let fixture: ComponentFixture<SantaCaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SantaCaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SantaCaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
