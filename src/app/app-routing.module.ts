import { UpdateUserComponent } from './pages/admin/update-user/update-user.component';
import { UserDetailsComponent } from './pages/admin/user-details/user-details.component';
import { UpdatePasswordAdminComponent } from './pages/admin/update-password-admin/update-password-admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';

import { adminGuard } from './Guard/Admin/admin.guard';
import { PatientDashboardComponent } from './pages/Patient/patient-dashboard/patient-dashboard.component';
import { patientGuard } from './Guard/Patient/patient.guard';
import { AdminWelcomeComponent } from './pages/admin/admin-welcome/admin-welcome.component';
import { PatientComponent } from './pages/Patient/patient/patient.component';
import { ProfilAdminComponent } from './pages/admin/profil-admin/profil-admin.component';
import { UpdateProfiAdminComponent } from './pages/admin/update-profi-admin/update-profi-admin.component';

const routes: Routes = [

  { path: 'forgetPassword', component: ForgetPasswordComponent },
  { path: 'updatepassword/:id', component: UpdatePasswordComponent },
  { path: 'inscription', component: InscriptionComponent },
  {
    path: "Admin", component: DashboardComponent, children: [
      { path: '', component: AdminWelcomeComponent },
      { path: 'profil', component: ProfilAdminComponent },
      { path: 'updateProfil/:id', component: UpdateProfiAdminComponent },
      { path: 'UpdatePassword/:id', component: UpdatePasswordAdminComponent },
      { path: 'utilisateur/:id', component: UserDetailsComponent },
      { path: 'ModifierUtilisateur/:id', component: UpdateUserComponent },

    ]
  },
  {
    path: 'Patient', component: PatientDashboardComponent, canActivate: [patientGuard], children: [
      {
        path: '', component: PatientComponent
      },


    ]
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
