import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { AuthenticationService } from './services/authentication.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { MonitoringComponent } from './components/monitoring/monitoring.component';
import { PersonsComponent } from './components/persons/persons.component';
import { ManagementComponent } from './components/management/management.component';
import { SystemComponent } from './components/system/system.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HelpComponent } from './components/help/help.component';
import { ContactComponent } from './components/contact/contact.component';
import { SampleGuard } from './guards/sample.guard';
import { CameraComponent } from './components/camera/camera.component';
import { PlaygroundComponent } from './components/playground/playground.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    HomeComponent,
    MonitoringComponent,
    PersonsComponent,
    ManagementComponent,
    SystemComponent,
    ReportsComponent,
    SettingsComponent,
    HelpComponent,
    ContactComponent,
    CameraComponent,
    PlaygroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [
    SampleGuard,
    HttpClient,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
