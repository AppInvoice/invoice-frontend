import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly URI_ALL_USERS = '/users';
  private readonly URI_USER_BALANCE = '/retrieve-balance';

  public userBalance = new BehaviorSubject<User>(null);

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
   * The response will be the next value of a BehaviorSubject, so any part of the applciation can be triggered.
   */
  public retrieveUserBalance(email: string): void {
    this.httpClient
      .get<User>(environment.baseUrl + this.URI_USER_BALANCE, {
        params: new HttpParams().set('email', email),
      })
      .subscribe((user) => this.userBalance.next(user));
  }
}
