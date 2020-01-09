import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-department-list',
  template: `
    <h2>
      Meanstack List!
    </h2>
    <div>
      <ul class="items">
        <li (click)="onSelect(department)" [class.selected]="iSelected(department)" *ngFor="let department of departments">
          <span class="badge">{{ department.id }}</span> - {{ department.name }}
        </li>
      </ul>
    </div>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
  departments = [
    {"id": 1, "name": "MongoDB" },
    {"id": 2, "name": "Express"},
    {"id": 3, "name": "Angular"},
    {"id": 4, "name": "Node"}
  ];

  constructor(private router: Router, private route: ActivatedRoute) { }
  public selectedId;
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(department){
    //console.log(department.name);
    // this.router.navigate([
    //   '/departments',
    //   department.id
    // ]);
    // Relative Route
    this.router.navigate([
                          department.id
                        ],
                        {
                          relativeTo: this.route
                        });
  }

  iSelected(department){
    return department.id === this.selectedId;
  }

}
