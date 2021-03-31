import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Injectable({ providedIn: 'root' })
export class GoogleAuthService {
  constructor(private localStorage: LocalStorageService) {}

  private readonly accessTokenName = 'accessToken';

  private isGApiSet = false;

  private authInstance: gapi.auth2.GoogleAuth;

  private accessTokenString: string;

  getAccessToken(): string {
    return this.accessTokenString;
  }

  userGapi: BehaviorSubject<gapi.auth2.GoogleUser> = new BehaviorSubject<gapi.auth2.GoogleUser>(
    null,
  );

  isUserAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  async initGoogleAuth(): Promise<void> {
    const load = new Promise((resolve) => {
      gapi.load('auth2', resolve);
    }).catch(() => {
      throwError('Failed to load gapi client');
    });

    await load;

    await gapi.auth2.init({ client_id: environment.googleAuthClient }).then((auth) => {
      this.isGApiSet = true;
      this.authInstance = auth;
    });
  }

  async authenticateUser(): Promise<gapi.auth2.GoogleUser> {
    if (!this.isGApiSet) {
      await this.initGoogleAuth();
    }

    const user = await this.authInstance.signIn();
    this.accessTokenString = user.getAuthResponse().id_token;
    this.localStorage.setItem(this.accessTokenName, this.accessTokenString);

    return Promise.resolve(user);
  }

  async checkIfAuthenticated(): Promise<boolean> {
    if (!this.isGApiSet) {
      await this.initGoogleAuth();
    }

    return this.authInstance.isSignedIn.get();
  }

  async logOut(): Promise<void> {
    await this.authInstance?.signOut();
  }

  subscribeToUserStatus(): void {
    this.authInstance.isSignedIn.listen((userStatus) => {
      this.isUserAuthenticated.next(userStatus);
    });
  }
}
