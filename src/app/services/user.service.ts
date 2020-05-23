import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly URI_ALL_USERS = '/users';
  private readonly URI_USER_BALANCE = '/retrieve-balance';

  constructor(private httpClient: HttpClient) {}

  /**
   * Retrieves all the users performing a GET request against.
   *
   * @returns All the retrieved users
   */
  public findUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(
      environment.baseUrl + this.URI_ALL_USERS
    );
  }

  /**
   * Retrieves the user balance using the email as QueryParam.
   *
   * @returns The fully user information
   */
  public retrieveUserBalance(): Observable<User> {
    return this.httpClient.get<User>(
      environment.baseUrl + this.URI_USER_BALANCE
    );
  }
}
