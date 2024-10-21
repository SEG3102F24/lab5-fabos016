import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeComponent } from './employee.component';

import {appConfig} from '../app.config'

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [EmployeeComponent],
    providers: [
      appConfig.providers
    ]
});
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should successfully submit the form and reset it', async () => {
    component.employeeForm.patchValue({
      name: 'Test User',
      dateOfBirth: '2024-10-20',
      city: 'Ottawa',
      salary: 99999,
      gender: 'X',
      email: 'test@tests'
    });

    expect(component.employeeForm.valid).toBeTruthy();

    await component.onSubmit();

    expect(component.employeeForm.value).toEqual({
      name: null,
      dateOfBirth: null,
      city: null,
      salary: null,
      gender: null,
      email: null,
    });
  });
});
