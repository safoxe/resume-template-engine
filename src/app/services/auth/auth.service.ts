import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { HttpClient } from '@angular/common/http';

interface ErrorResponse {
  error_text: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly accessTokenName = 'accessToken';

  constructor(private localStorage: LocalStorageService, private httpClient: HttpClient) {}

  async logIn(email: string, password: string): Promise<void> {
    await this.httpClient
      .post(
        `${environment.endpoint}/api/user/signInUser`,
        {
          Email: email,
          Password: password,
        },
        {
          responseType: 'json',
        },
      )
      .toPromise()
      .then((token) => {
        this.setAccessToken((token as { access_token: string; username: string }).access_token);
      });
  }

  getAccessToken(): string {
    return this.localStorage.getItem(this.accessTokenName);
  }

  private setAccessToken(accessToken: string): void {
    this.localStorage.setItem(this.accessTokenName, accessToken);
  }
}
