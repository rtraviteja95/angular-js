import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { AppComponent } from './student-management/app.component';
import { TableComponent } from './student-management/table/table.component';
import { TableService } from './student-management/table/table.service';

const appRoutes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    HttpClientModule,
    Ng2SmartTableModule
  ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
