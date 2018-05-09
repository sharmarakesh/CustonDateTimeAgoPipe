import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TimeAgoFilter } from './time-ago-filter';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { CurrencyFormaterPipe } from './currency-formater-pipe';
import {NgAutoCompleteModule} from 'ng-auto-complete';

@NgModule({
  declarations: [
    AppComponent,
    TimeAgoFilter,
    FileUploadComponent,
    CurrencyFormaterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgAutoCompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
