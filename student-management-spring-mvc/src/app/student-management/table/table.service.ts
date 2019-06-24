import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestService } from '../../rest.service';

@Injectable()
export class TableService {

    constructor(private http: HttpClient, public rest: RestService) { }

    loadStudentsIntoPage() {
        return this.rest.getAllStudents();
    }
}