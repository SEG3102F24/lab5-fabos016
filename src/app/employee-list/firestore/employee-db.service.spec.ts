import { TestBed } from '@angular/core/testing';
import {appConfig} from '../../app.config'
import { EmployeeDbService } from './employee-db.service';
import { EmployeeEntry } from '../../employee-list/employee-entry'


describe('EmployeeDbService', () => {
  let service: EmployeeDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        appConfig.providers
      ]
    });
    service = TestBed.inject(EmployeeDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create an employee record in the database', async () =>
    {
      const employee: EmployeeEntry = {
        name: 'Test User',
        dateOfBirth: new Date(),
        city: 'Ottawa',
        salary: 99999,
        gender: 'X',
        email: 'test@tests'
      };

      try {
        const docRef = await service.addEmployee(employee);

        expect(docRef).toBeDefined();
        expect(docRef.id).toBeTruthy();
      } catch (error) {
        fail('The add request failed');
      }
    });
});
