import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators/';
// import 'rxjs/add/observable/throw'


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // private _url: string = "/assets/data/employees.json";
  private _url: string = "http://dummy.restapiexample.com/api/v1/employeeees";
  // private _url: string = "http://dummy.restapiexample.com/api/v1/employees";

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
    // return this.http.get<IEmployee[]>(this._url);
    return this.http.get<IEmployee[]>(this._url).pipe(
      // map(data => {
      //   return data
      // }),
      catchError(this.errorHandler)
    );
  }

  errorHandler(error : HttpErrorResponse){
    console.log(error.message);
    return throwError(error.message || "Server Error");
  }


  // getEmployees(): Observable<ISearchItem[]>{
  //   let iItem : any = [];
  //   this.http.get(this._url).subscribe(data => {
  //     Object.values(data).forEach(item=>{
  //       iItem.push(new SearchItem({
  //         id : item.id,
  //         name: item.employee_name,
  //         age: item.employee_age,
  //         salary: item.employee_salary
  //       }));
  //    });
  //    console.log(iItem);
  //   });
  //   return iItem;

  // }
}
