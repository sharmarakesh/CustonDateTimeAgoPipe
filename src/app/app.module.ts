import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
import { RollingTabsNewComponent } from './rolling-tabs-new/rolling-tabs-new.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { HttpClient } from '../../node_modules/@types/selenium-webdriver/http';
import { DynamicFormQuestionComponent } from './dynamic-forms/dynamic-form-question/dynamic-form-question.component';
import { QuestionControlService } from './dynamic-forms/question-control.service';
import { QuestionService } from './dynamic-forms/question.service';
import { DynamicFormTestComponent } from './dynamic-forms/dynamic-form-test/dynamic-form-test.component';
import { DynamicFormTest1Component } from './dynamic-forms/dynamic-form-test-1/dynamic-form-test-1.component';
import { CustomDropdownExampleComponent } from './custom-dropdown-example/custom-dropdown-example.component';
import { CustomDropdownComponent } from './custom-dropdown-example/custom-dropdown/custom-dropdown.component';

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
    ScrollingTabsComponent,
    RollingTabsNewComponent,
    DynamicFormsComponent,
    DynamicFormQuestionComponent,
    DynamicFormTestComponent,
    DynamicFormTest1Component,
    CustomDropdownExampleComponent,
    CustomDropdownComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
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
}, RatingService, NavigationService, QuestionControlService, QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
