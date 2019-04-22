import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryMailingComponent } from './history-mailing.component';

describe('HistoryMailingComponent', () => {
  let component: HistoryMailingComponent;
  let fixture: ComponentFixture<HistoryMailingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryMailingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryMailingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
