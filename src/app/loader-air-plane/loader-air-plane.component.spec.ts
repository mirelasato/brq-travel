import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderAirPlaneComponent } from './loader-air-plane.component';

describe('LoaderAirPlaneComponent', () => {
  let component: LoaderAirPlaneComponent;
  let fixture: ComponentFixture<LoaderAirPlaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderAirPlaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderAirPlaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
