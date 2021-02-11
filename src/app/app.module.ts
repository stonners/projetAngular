import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppComponent } from './app.component';
import { ConsoleComponent } from './console/console.component';
import { ConsoleService } from './services/console/console.service';
import { ConsoleHomeComponent } from './console-home/console-home.component';
import { ConsoleListComponent } from './console-list/console-list.component';
import {Routes, RouterModule} from '@angular/router';
import {environment} from '../environments/environment';
import { ConsoleNewComponent } from './console-new/console-new.component';
import { ConsoleModifComponent } from './console-modif/console-modif.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';


const appRoutes: Routes = [
  {
    path: 'console',
    component: ConsoleListComponent
  },
  {path: 'new',
    component: ConsoleNewComponent

  },
  {
    path: '',
    component: ConsoleHomeComponent
  },
  {
    path: 'modif/:id',
    component: ConsoleModifComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    ConsoleComponent,
    ConsoleHomeComponent,
    ConsoleListComponent,
    ConsoleNewComponent,
    ConsoleModifComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    ConsoleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
