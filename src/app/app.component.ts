import { Component, ViewChild,ElementRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
const USER_DATA =  [
  {"Domain": "John Smith", "Price": 122, "Update": 1984, "Clicks": 36},
  {"Domain": "Muhi Masri", "Price": 222, "Update": 1992, "Clicks": 28},
  {"Domain": "Peter Adams", "Price": 987, "Update": 2000, "Clicks": 20},
  {"Domain": "Lora Bay", "Price": 625, "Update": 1977, "Clicks": 43},
  {"Domain": "Peter Adams", "Price": 987, "Update": 2000, "Clicks": 20},
  {"Domain": "Lora Bay", "Price": 625, "Update": 1977, "Clicks": 43},
  {"Domain": "Peter Adams", "Price": 987, "Update": 2000, "Clicks": 20},
  {"Domain": "Lora Bay", "Price": 625, "Update": 1977, "Clicks": 43},
  {"Domain": "Peter Adams", "Price": 987, "Update": 2000, "Clicks": 20},
  {"Domain": "Lora Bay", "Price": 625, "Update": 1977, "Clicks": 43},
  {"Domain": "Peter Adams", "Price": 987, "Update": 2000, "Clicks": 20},
  {"Domain": "Lora Bay", "Price": 625, "Update": 1977, "Clicks": 43},
  {"Domain": "Peter Adams", "Price": 987, "Update": 2000, "Clicks": 20},
  {"Domain": "Lora Bay", "Price": 625, "Update": 1977, "Clicks": 43},
  {"Domain": "Peter Adams", "Price": 987, "Update": 2000, "Clicks": 20},
  {"Domain": "Lora Bay", "Price": 625, "Update": 1977, "Clicks": 43},
  {"Domain": "Peter Adams", "Price": 987, "Update": 2000, "Clicks": 20},
  {"Domain": "Lora Bay", "Price": 625, "Update": 1977, "Clicks": 43},
  
]

const COLUMNS_SCHEMA = [
  {
      key: "Domain",
      type: "text",
      label: "Domain"
  },
  {
      key: "Price",
      type: "text",
      label: "Price"
  },
  {
    key: "Update",
    type: "any",
    label: "Update"
},
  {
      key: "Clicks",
      type: "number",
      label: "Clicks"
  },
  {
    key: "isEdit",
    type: "isEdit",
    label: ""
  }
]



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: `<input matInput (keyup)="applyFilter($event)" placeholder="filter">`
})
export class AppComponent {
  displayedColumns: string[] = COLUMNS_SCHEMA.map(col => col.key);
  
  columnsSchema = COLUMNS_SCHEMA;
 
 dataSource = new MatTableDataSource(USER_DATA);
 @ViewChild(MatPaginator)
  paginator!: MatPaginator;
 
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}