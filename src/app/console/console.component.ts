import {Component, Input, OnInit} from '@angular/core';
import {ConsoleService} from '../services/console/console.service';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {
  @Input() name: string;
  @Input() description: string;
  @Input() brand: string;
  @Input() price: number;
  @Input() image: string;
  @Input() size: string;
  @Input() console: any;
  @Input() id: number;

  constructor(
    private Console: ConsoleService
  ) { }

  supr() {
    this.Console.delete(this.id);
  }
  ngOnInit() {
  }

}
