import {Component, OnDestroy, OnInit} from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {map} from 'rxjs/operators';
import {ConsoleService} from '../services/console/console.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-console-list',
  templateUrl: './console-list.component.html',
  styleUrls: ['./console-list.component.css']
})
export class ConsoleListComponent implements OnInit, OnDestroy {
  console: any = [];
  consoleSubscription: Subscription;

  constructor( private Console: ConsoleService) {
  }

  ngOnInit() {
    this.consoleSubscription = this.Console.consoleSubject.subscribe((list
    ) => {
      this.console = list;
    });
    this.Console.emitConsoleSubject();
  }
  ngOnDestroy() {
    this.consoleSubscription.unsubscribe();
  }

}
