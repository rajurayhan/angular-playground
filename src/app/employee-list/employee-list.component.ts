import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
  <h2>{{errorMsg}}</h2>
  <div>
    <h2>Employee List</h2>
    <ul *ngFor="let employee of employees">
      <li>{{ employee.employee_name }}</li>
    </ul>
  </div>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

  public employees  = [];
  public errorMsg;

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
        .subscribe(
            data => this.employees = data,
            error => this.errorMsg = error
          );
  }

}
