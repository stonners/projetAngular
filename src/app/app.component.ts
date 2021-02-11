import {Component, OnInit} from '@angular/core';
import {Input} from '@angular/core/src/metadata/directives';
import {ConsoleService} from './services/console/console.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   title = 'Game Market';
   image = 'https://i.ytimg.com/vi/4-cr3DDAaDM/maxresdefault.jpg';
   console: any = [];


  constructor(private Console: ConsoleService) {
  }

  ngOnInit() {
    this.console = this.Console.console;
  }
}



