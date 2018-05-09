import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TimeAgoFilter } from './time-ago-filter';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { CurrencyFormaterPipe } from './currency-formater-pipe';
import {NgAutoCompleteModule} from 'ng-auto-complete';
import { NgSelectModule, NG_SELECT_DEFAULT_CONFIG } from '@ng-select/ng-select';
import { CustomAutoCompleteComponent } from './custom-auto-complete/custom-auto-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeAgoFilter,
    FileUploadComponent,
    CurrencyFormaterPipe,
    CustomAutoCompleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgAutoCompleteModule,
    NgSelectModule
  ],
  providers: [
    {
    provide: NG_SELECT_DEFAULT_CONFIG,
    useValue: {
        notFoundText: 'search text not found'
    }
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
