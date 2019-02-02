import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router/src/router_state';

@Injectable()
export class NeedAuthGuard implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const redirectUrl = route['_routerState']['url'];

    if (this.authService.isLogged()) {
      return true;
    }

    this.router.navigateByUrl(
      this.router.createUrlTree(
        ['/login'], {
          queryParams: {
            redirectUrl
          }
        }
      )
    );

    return false;
  }
}