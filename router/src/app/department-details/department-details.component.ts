import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from "@angular/router";

@Component({
  selector: 'app-department-details',
  template: `
    <h3>
      Selected Department ID is {{ departmentId }}
    </h3>

    <p>
      <button (click)="showOverview()">Overview</button>
      <button (click)="showContact()">Contact</button>
    </p>
    <router-outlet></router-outlet>

    <a (click)="goPrevious()">Previous</a>
    <a (click)="goNext()">Next</a>

    <div>
      <button (click)="goGotoDepartment()">Go to Department</button>
    </div>
  `,
  styles: []
})
export class DepartmentDetailsComponent implements OnInit {
  public departmentId;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    //this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }

  goPrevious(){
    let previousId = this.departmentId - 1;
    //this.departmentId = previousId;
    this.router.navigate([
      '/departments',
      previousId
    ]);
    // console.log('goPrevious');
  }

  goNext(){
    let nextId = this.departmentId + 1;
    //this.departmentId = nextId;
    this.router.navigate([
      '/departments',
      nextId
    ]);
    // console.log('goNext');
  }

  goGotoDepartment(){
    let selectedId = this.departmentId ? this.departmentId : null;
    // this.router.navigate([
    //   '/departments',
    //   {id: selectedId, test: 'test'}
    // ]);
    this.router.navigate([
      '../',
      {id: selectedId, test: 'test'}
    ],
    {
      relativeTo: this.route
    });
  }

  showOverview(){
    this.router.navigate(['overview'], {relativeTo: this.route});
  }

  showContact(){
    this.router.navigate(['contact'], {relativeTo: this.route});
  }

  // http://localhost:4200/departments;id=1

}
