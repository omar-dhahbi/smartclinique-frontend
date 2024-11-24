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
import { PatientComponent } from './pages/Patient/patient/patient.component';
import { SidbarComponent } from './pages/admin/sidbar/sidbar.component';
import { NavbarComponent } from './pages/admin/navbar/navbar.component';
import { ProfilAdminComponent } from './pages/admin/profil-admin/profil-admin.component';
import { patientGuard } from './Guard/Patient/patient.guard';
import { adminGuard } from './Guard/Admin/admin.guard';
import { medcineGuard } from './Guard/Medcine/medcine.guard';
import { MatCardModule } from '@angular/material/card';
import { UpdateProfiAdminComponent } from './pages/admin/update-profi-admin/update-profi-admin.component';
import { MatButtonModule } from '@angular/material/button';
import { UpdatePasswordAdminComponent } from './pages/admin/update-password-admin/update-password-admin.component';
import { UserDetailsComponent } from './pages/admin/user-details/user-details.component';
import { UpdateUserComponent } from './pages/admin/update-user/update-user.component';


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
    PatientComponent,
    SidbarComponent,
    NavbarComponent,
    ProfilAdminComponent,
    UpdateProfiAdminComponent,
    UpdatePasswordAdminComponent,
    UserDetailsComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
     MatButtonModule


  ],
  providers: [
    UserService,
    { provide: 'HEADERS', useValue: new HttpHeaders({ 'Content-Type': 'application/json' }) },
    AuthInterceptorProviders,
    patientGuard,
    medcineGuard,
    adminGuard,
    UserService



  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
