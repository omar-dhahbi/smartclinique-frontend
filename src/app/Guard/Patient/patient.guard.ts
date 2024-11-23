import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/User/user.service';
@Injectable({
  providedIn:"root"
})
export class patientGuard implements CanActivate {
  constructor(private auths: UserService, private route: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     if (localStorage.getItem('role') == 'Patient' && this.auths.IsLoggedIn()) {
      
       return true
     }
    
   return this.route.navigate(['login']);
    
     
    }
};
