import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Produit.NewComponent } from './produit.new.component';

describe('Produit.NewComponent', () => {
  let component: Produit.NewComponent;
  let fixture: ComponentFixture<Produit.NewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Produit.NewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Produit.NewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
