import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-console-home',
  templateUrl: './console-home.component.html',
  styleUrls: ['./console-home.component.css']
})
export class ConsoleHomeComponent implements OnInit {

  @Input() image: string ;
  title = ' Game Market' ;
  constructor() { }

  ngOnInit() {
  }

}
