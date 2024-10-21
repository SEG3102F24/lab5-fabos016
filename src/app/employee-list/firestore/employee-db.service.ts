import {inject, Injectable} from '@angular/core';
import {Firestore,
  collection,
  collectionData,
  addDoc} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {EmployeeEntry} from "../employee-entry";

@Injectable({
  providedIn: 'root'
})
export class EmployeeDbService {

  private firestore:  Firestore = inject(Firestore);

  getEmployees(): Observable<EmployeeEntry[]> {
    const employees = collection(this.firestore, 'employees');
    return collectionData(employees, {idField: 'id'}) as Observable<EmployeeEntry[]>;
  }

  addEmployee(employee: EmployeeEntry) {
    const employees = collection(this.firestore, 'employees');
    delete employee.id;
    // @ts-ignore
    return addDoc(employees, {...employee});
  }
}
