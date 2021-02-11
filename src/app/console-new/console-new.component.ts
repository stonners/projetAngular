import { Component, OnInit } from '@angular/core';
import {ConsoleService} from '../services/console/console.service';

@Component({
  selector: 'app-console-new',
  templateUrl: './console-new.component.html',
  styleUrls: ['./console-new.component.css']
})
export class ConsoleNewComponent implements OnInit {

  public console: any = {
    name: null,
    description: null,
    brand: null,
    image: null,
    size: null,
    price: null
  };

  constructor(private Console: ConsoleService) { }

  ngOnInit() {
  }

  add() {
    this.Console.saveNewConsole(this.console).subscribe(() => {
      this.console = {
        name: null,
        description: null,
        brand: null,
        image: null,
        size: null,
        price: null
      };
    });
    alert('votre document a bien été enregistré');
    document.location.href = './';
  }

}
