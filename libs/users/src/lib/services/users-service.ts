import { UsersFacade } from './../state/users.facade';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { User } from '../models/user';
import { map } from 'rxjs/operators';

import * as countriesLib from 'i18n-iso-countries'
declare const require;

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiURLUsers = environment.apiUrl + 'users';

  constructor(private http: HttpClient, private usersfacade: UsersFacade) {
    countriesLib.registerLocale(require('i18n-iso-countries/langs/en.json'));
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiURLUsers);
  }

  createUser(user: User): Observable<User>{
    return this.http.post<User>(this.apiURLUsers, user);
  }

  registerUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.apiURLUsers}/register`, user);
  }

  getUser(userId: string): Observable<User> {
    return this.http.get<User>(`${this.apiURLUsers}/${userId}`);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiURLUsers}/${user.id}`, user);
  }

  deleteUser(userId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiURLUsers}/${userId}`);
  }
  getUsersCount(): Observable<number> {
    return this.http
      .get<number>(`${this.apiURLUsers}/get/count`)
      .pipe(map((objectValue: any) => objectValue.userCount));
  }


  getCountries():{id:string,name:string}[] {
   
    return Object.entries(countriesLib.getNames('en', {select: 'official'})).map(
      (entry) => {
        return {
          id:entry[0],
        name:entry[1]
        };

    }
    );
  

  }
  getCountry(countryKey: string): string {
    return countriesLib.getName(countryKey, 'en');
  }
  
  initAppSession(){
    this.usersfacade.buildUserSession();

  }
  observeCurrentUser(){
    return this.usersfacade.currentUser$;

  }
  isCurrentUserAuth(){
    return this.usersfacade.isAuthenticated$;
  }
}
