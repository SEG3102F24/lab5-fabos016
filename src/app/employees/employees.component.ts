import {Component, OnInit, inject} from '@angular/core';
import {EmployeeDbService} from "../employee-list/firestore/employee-db.service";
import { RouterLink } from '@angular/router';
import { NgFor, AsyncPipe, DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { EmployeeEntry } from '../employee-list/employee-entry'; // Adjust the import path

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css'],
    standalone: true,
    imports: [RouterLink, NgFor, AsyncPipe, DatePipe]
})
export class EmployeesComponent implements OnInit {
  protected employeeDbService: EmployeeDbService = inject(EmployeeDbService);

  employees$!: Observable<EmployeeEntry[]>;

  ngOnInit() {
    this.employees$ = this.employeeDbService.getEmployees();
  }
}
