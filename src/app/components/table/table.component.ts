
import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  posts: any = [];

  @Input() data: any;

 constructor(http: Http) {

 }

  ngOnInit() {

  }

}
