import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationpaymentComponent } from './confirmationpayment.component';

describe('ConfirmationpaymentComponent', () => {
  let component: ConfirmationpaymentComponent;
  let fixture: ComponentFixture<ConfirmationpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
