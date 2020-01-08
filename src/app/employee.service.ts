import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
      {"id": 1, "name" : "Raju Rayhan", "age" : 27},
      {"id": 1, "name" : "Mobarok Hossain", "age" : 37},
      {"id": 1, "name" : "Pablu Bhai", "age" : 47},
    ];
  }
}
