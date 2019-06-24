import { Component, OnInit } from '@angular/core';
import { TableService } from './table.service';
import { StudentTable } from './StudentTable';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Name'
      },
      dob: {
        title: 'DOB'
      },
      gender: {
        title: 'Gender'
      },
      address: {
        title: 'Address'
      }
    },
    attr: {
            class: 'table table-bordered'
          }
    };
  
  studentsData: StudentTable[];

  constructor(private tservice: TableService) { }

  ngOnInit() {
    this.loadStudentsIntoTable();
  }

  loadStudentsIntoTable() {
    this
      .tservice
      .loadStudentsIntoPage()
      .subscribe((data: StudentTable[]) => {
        this.studentsData = data;
      });
  }

}
