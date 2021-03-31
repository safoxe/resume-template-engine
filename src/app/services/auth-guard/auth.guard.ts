import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, UrlTree } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(): Promise<boolean | UrlTree> {
    return this.canActivate();
  }

  async canActivate(): Promise<boolean | UrlTree> {
    if (this.authService.isUserAuthenticated()) {
      return true;
    }
    return this.router.createUrlTree(['/log-in']);
  }
}
