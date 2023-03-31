import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SearchTask';
  ngOnInit(): void {
  }
  data = [
    {id : 1, name : 'anguar'},
    {id : 2, name : 'react'},
    {id : 3, name : 'javascript'},
    {id : 4, name : 'bootstrap'},
    {id : 5, name : 'Vue'},
  ]
  searchText = '';
}
