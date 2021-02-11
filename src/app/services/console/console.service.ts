import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {map} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {

  form: any;

  constructor(
    private db: AngularFirestore
  ) {
    this.getAllConsole();
  }

  consoleSubject = new Subject<any[]>();

  console: any = [];


  emitConsoleSubject() {
    this.consoleSubject.next(this.console.slice());
  }

  getConsoleById(id: number) {
    for (const consoles of this.console) {
      if (consoles.id) {
        return consoles;
      }
    }
  }

  saveNewConsole(console: any) {
    return new Observable(obs => {
        this.db.collection('test').add(console).then(() => {
          console.log('success');
        });
      }
    );
  }

  update(console: any, id: any) {
    return new Observable(obs => {
      this.db.doc(`test/${id}`).update(console);
      obs.next();
    });
  }

  delete(id: any) {
    this.db.doc(`test/${id}`).delete();
  }

  getAllConsole() {
    return this.db.collection('test').snapshotChanges().pipe(
      map(changes => {
        return changes.map(doc => {
          return {
            id: doc.payload.doc.id,
            data: doc.payload.doc.data()
          };
        });
      })
    ).subscribe(res => {
      this.console = res;
      this.emitConsoleSubject();
    });
  }
}
