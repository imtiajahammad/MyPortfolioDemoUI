import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerAdjectiveComponent } from './career-adjective.component';

describe('CareerAdjectiveComponent', () => {
  let component: CareerAdjectiveComponent;
  let fixture: ComponentFixture<CareerAdjectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerAdjectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerAdjectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
