import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'

import { AppComponent } from './components/app.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { Ng2TableModule} from 'ng2-table/ng2-table';
import { PaginationModule } from 'ngx-bootstrap';
import {DataService} from './services/data.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    Ng2TableModule,
    FormsModule,
    HttpModule,
    PaginationModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
