import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TableService } from './table/table.service';
import { StudentTable } from './table/StudentTable';

import { RestService } from '../rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './html/app.component.html',
  styleUrls: ['./css/app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Student Management!';

  students: any = [];

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router,
    private tservice: TableService) { }

  ngOnInit() {
    this.loadStudentsIntoPage();
  }

  loadStudentsIntoPage() {
    this.students = [];
    this.rest.getAllStudents().subscribe((data: {}) => {
      console.log(data);
      this.students = data[0];
    });
  }

}
