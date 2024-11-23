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

const routes: Routes = [
 
  { path: 'forgetPassword', component: ForgetPasswordComponent },
  { path: 'updatepassword/:id', component: UpdatePasswordComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: '', redirectTo:"Patient",pathMatch:"full" },
  {
    path: "Admin", component: DashboardComponent, canActivate: [adminGuard], children: [
      { path: '', component: AdminWelcomeComponent },


    ]
  },
  {
    path: 'Patient', component: PatientDashboardComponent, canActivate: [patientGuard], children: [
      {
         path:'',component:PatientComponent
      }

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
