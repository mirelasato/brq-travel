import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardchoicetravelComponent } from './cardchoicetravel.component';

describe('CardchoicetravelComponent', () => {
  let component: CardchoicetravelComponent;
  let fixture: ComponentFixture<CardchoicetravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardchoicetravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardchoicetravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
