import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ConsoleService} from '../services/console/console.service';

@Component({
  selector: 'app-console-modif',
  templateUrl: './console-modif.component.html',
  styleUrls: ['./console-modif.component.css']
})
export class ConsoleModifComponent implements OnInit {

  console: any = [];
  console2: string;
  id: string;
  change: any;

  constructor(private Console: ConsoleService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.id = this.Console.getConsoleById(id).id;
    this.console = this.Console.getConsoleById(id).data;
  }

  modif() {
    this.Console.update(this.console, this.id).subscribe(() => {
      this.change = true;
      setTimeout(() => {
         this.change = false;

      }, 3000);
    });
  }

}
