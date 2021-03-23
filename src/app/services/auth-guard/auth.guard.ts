import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { GoogleAuthService } from '../google-auth/google-auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private googleAuth: GoogleAuthService, private router: Router) {}

  canLoad(): Promise<boolean | UrlTree> {
    return this.canActivate();
  }

  async canActivate(): Promise<boolean | UrlTree> {
    if (await this.googleAuth.checkIfAuthenticated()) {
      return true;
    }
    return this.router.createUrlTree(['/log-in']);
  }
}
