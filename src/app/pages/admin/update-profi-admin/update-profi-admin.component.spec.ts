import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProfiAdminComponent } from './update-profi-admin.component';

describe('UpdateProfiAdminComponent', () => {
  let component: UpdateProfiAdminComponent;
  let fixture: ComponentFixture<UpdateProfiAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateProfiAdminComponent]
    });
    fixture = TestBed.createComponent(UpdateProfiAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
