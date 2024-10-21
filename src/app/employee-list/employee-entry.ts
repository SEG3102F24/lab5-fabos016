import { Timestamp } from "@angular/fire/firestore";

export class EmployeeEntry {
  public id?: string | null;
  public name: string;
  public dateOfBirth: Timestamp;
  public city: string;
  public salary: number;
  public gender?: string;
  public email?: string;

  constructor(name: string, dateOfBirth: Date, city: string, salary: number, gender?: string, email?: string) {
    this.id = null;
    this.name = name;
    this.dateOfBirth = Timestamp.fromDate(dateOfBirth);
    this.city = city;
    this.salary = salary;
    this.gender = gender;
    this.email = email;
  }
}
