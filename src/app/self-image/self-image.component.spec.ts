import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfImageComponent } from './self-image.component';

describe('SelfImageComponent', () => {
  let component: SelfImageComponent;
  let fixture: ComponentFixture<SelfImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
