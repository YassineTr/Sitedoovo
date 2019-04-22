import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Produit.DetailComponent } from './produit.detail.component';

describe('Produit.DetailComponent', () => {
  let component: Produit.DetailComponent;
  let fixture: ComponentFixture<Produit.DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Produit.DetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Produit.DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
