import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LogoutComponent } from './logout/logout.component';

import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel'
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './services/auth.guard';

import {ProgressBarModule} from 'primeng/progressbar';
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {InputMaskModule} from 'primeng/inputmask';
import { AddComponent } from './components/add/add.component';
import { PasswordModule } from "primeng/password";
import { DividerModule } from "primeng/divider";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    LoginComponent,
    HomeComponent,
    LogoutComponent,
    AddComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BreadcrumbModule,
    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    HttpClientModule,
    FormsModule,
    HttpClientXsrfModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    PanelModule,
    ProgressBarModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
    InputMaskModule,
    PasswordModule,
    DividerModule,
    JwtModule.forRoot({
      config: {
        // ...
        tokenGetter: () => {
          return localStorage.getItem("token");
        },
      },
    },
    ),
  ],
  providers:[
    AuthGuard,
    MessageService,
    ConfirmationService
  ],
  exports:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
