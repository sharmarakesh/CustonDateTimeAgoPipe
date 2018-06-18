import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TimeAgoFilter } from './time-ago-filter';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { CurrencyFormaterPipe } from './currency-formater-pipe';
import { NgAutoCompleteModule } from 'ng-auto-complete';
import { NgSelectModule, NG_SELECT_DEFAULT_CONFIG } from '@ng-select/ng-select';
import { CustomAutoCompleteComponent } from './custom-auto-complete/custom-auto-complete.component';
import { TabsComponent } from './tabs/tabs.component';
import { Tabs1Component } from './tabs1/tabs1.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { RatingService } from './services/rating-service';
import { NavigationService } from './services/navigation-service';
// import { NgDatepickerModule } from 'ng2-datepicker';
import { MyDatePickerModule } from 'mydatepicker';
import { MyDatePickerExampleComponent } from './my-date-picker-example/my-date-picker-example.component';
import { RollingTabsComponent } from './rolling-tabs/rolling-tabs.component';
import { ScrollingTabsComponent } from './scrolling-tabs/scrolling-tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeAgoFilter,
    FileUploadComponent,
    CurrencyFormaterPipe,
    CustomAutoCompleteComponent,
    TabsComponent,
    Tabs1Component,
    NavigationBarComponent,
    MyDatePickerExampleComponent,
    RollingTabsComponent,
    ScrollingTabsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgAutoCompleteModule,
    NgSelectModule,
    // NgDatepickerModule,
    MyDatePickerModule
  ],
  providers: [
    {
    provide: NG_SELECT_DEFAULT_CONFIG,
    useValue: {
        notFoundText: 'search text not found'
    }
}, RatingService, NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
