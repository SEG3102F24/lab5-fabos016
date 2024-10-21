import { EmployeeEntry } from './employee-entry';

describe('EmployeeEntry', () => {
  it('should create a record of type EmployeeEntry', () => {
    expect(new EmployeeEntry("andrew", new Date(), "London", 1000)).toBeTruthy();
  });
});
