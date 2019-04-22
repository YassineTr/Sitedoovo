import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Produit.EditComponent } from './produit.edit.component';

describe('Produit.EditComponent', () => {
  let component: Produit.EditComponent;
  let fixture: ComponentFixture<Produit.EditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Produit.EditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Produit.EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
