import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';

import { ContentCardComponent } from './content-card/content-card.component';
import { FilterPipe } from './filter.pipe';
import { HoverAffectDirective } from './hover-affect.directive';
import { MessagesComponent } from './messages/messages.component';
import { ModifyContentComponent } from './modify-content/modify-content.component';
import { InMemoryDataService } from './services/in-memory-data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClient } from '@angular/common/http';
import { MarvelMoviesService } from './marvel-movies.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { AddContentDialogComponent } from './add-content-dialog/add-content-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentCardComponent,
    FilterPipe,
    HoverAffectDirective,
    MessagesComponent,
    ModifyContentComponent,
    AddContentDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [ MarvelMoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

