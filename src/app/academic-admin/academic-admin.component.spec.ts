import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicAdminComponent } from './academic-admin.component';

describe('AcademicAdminComponent', () => {
  let component: AcademicAdminComponent;
  let fixture: ComponentFixture<AcademicAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
