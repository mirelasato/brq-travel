import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistertravelComponent } from './registertravel.component';

describe('RegistertravelComponent', () => {
  let component: RegistertravelComponent;
  let fixture: ComponentFixture<RegistertravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistertravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistertravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
