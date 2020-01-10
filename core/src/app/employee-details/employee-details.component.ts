import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  template: `
  <h2>{{errorMsg}}</h2>
  <div>
    <h2>Employee List</h2>
    <ul *ngFor="let employee of employees">
      <li>{{ employee.id }}. {{ employee.name }} - {{ employee.employee_age }} - {{ employee.slug }} </li>
    </ul>
  </div>
  `,
  styles: []
})
export class EmployeeDetailsComponent implements OnInit {

  public employees = [];
  public errorMsg;
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    // this.employees = this._employeeService.getEmployees();
    this._employeeService.getEmployees()
                          .subscribe(
                            data => this.employees = data,
                            error => this.errorMsg = error
                          );
  }

}
