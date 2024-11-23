import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { UserService } from './services/User/user.service';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { PatientDashboardComponent } from './pages/Patient/patient-dashboard/patient-dashboard.component';
import { AuthInterceptorProviders } from './services/User/auth.interceptor';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminWelcomeComponent } from './pages/admin/admin-welcome/admin-welcome.component';
import Swal from 'sweetalert2';
import { PatientComponent } from './pages/Patient/patient/patient.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InscriptionComponent,
    UpdatePasswordComponent,
    ForgetPasswordComponent,
    DashboardComponent,
    PatientDashboardComponent,
    AdminWelcomeComponent,
    PatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [
    UserService,
    { provide: 'HEADERS', useValue: new HttpHeaders({ 'Content-Type': 'application/json' }) },
    AuthInterceptorProviders,



  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
