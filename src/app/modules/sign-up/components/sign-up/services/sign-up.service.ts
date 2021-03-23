import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../types/user.type';

@Injectable({ providedIn: 'root' })
export class SignUpService {
  constructor(private http: HttpClient) {}

  signUpUser(user: User): Observable<any> {
    return this.http.post(`${environment.endpoint}/api/user/signUpUser`, user, {
      responseType: 'text',
    });
  }
}
