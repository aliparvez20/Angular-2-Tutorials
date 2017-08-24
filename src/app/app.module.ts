import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AlertModule} from 'ngx-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {TutorialsComponent} from './tutorials/tutorials.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';

EmployeeListComponent
@NgModule({
    declarations: [
        AppComponent,
        TutorialsComponent,
        EmployeeListComponent,
        EmployeeDetailsComponent
    ],
    imports: [
        AlertModule.forRoot(), BrowserModule, FormsModule, ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
