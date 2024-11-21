import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/User/user.service';

export class adminGuard implements CanActivate {
  constructor(private auths: UserService, private route: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('role') == 'admin' && this.auths.IsLoggedIn()) {
      return true
    }
    else {
      this.route.navigate(['login']);
      return false
    }

  }
}
