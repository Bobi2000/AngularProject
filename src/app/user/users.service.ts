import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, shareReplay } from 'rxjs/operators';
import { IUser } from '../shared/interfaces/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  currentUser: { username: string, password: string, isAdmin: boolean } = null;

  get isLogged() { return !!this.currentUser; }

  get isAdmin() {
    if (this.currentUser != null) {
      return this.currentUser.isAdmin;
    } else {
      return false;
    }
  }

  authCompleted$ = this.http.get('auth').pipe(shareReplay(1));

  users: IUser[];

  constructor(private http: HttpClient, private router: Router) {
    const currentUser = localStorage.getItem('current-user');
    this.currentUser = currentUser ? JSON.parse(currentUser) : null;
    /*this.authCompleted$.subscribe((user: any) => {
      this.currentUser = user;
    }, () => {
      this.currentUser = null;
    });*/
  }

  loadUsers() {
    this.http.get<IUser[]>('https://localhost:44331/api/users').subscribe(users => {
      this.users = users;
    });
  }
  /// ${username}
  login(username: string, password: string) {
    this.http.get(`https://localhost:44331/api/login/${username}/${password}`).subscribe((user: any) => {
      console.log(user);
      const isAdmin = user.isAdmin;
      localStorage.setItem('current-user', JSON.stringify({ username, password, isAdmin }));
      this.currentUser = user;
      this.router.navigate(['']);
    }, error => {
      alert('Wrong Credentials!');
    });
    /*return this.http.get(`https://localhost:44331/api/login/${username}/${password}`).pipe(tap((user: any) => {
      console.log(user);
      localStorage.setItem('current-user', JSON.stringify({ username, password }));
      this.currentUser = user;
    }));*/
  }

  register(username: string, password: string) {
    return this.http.get(`https://localhost:44331/api/register/${username}/${password}`);
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('current-user');
    this.router.navigate(['']);
  }

  changePassword(username: string, password: string, newPassword: string) {
    this.http.get(`https://localhost:44331/api/register/${username}/${password}/${newPassword}`).subscribe((user: any) => {
      this.currentUser = null;
      localStorage.removeItem('current-user');
      this.router.navigate(['']);

      console.log(user);

      const isAdmin = user.isAdmin;
      const newPassword = user.password;
      
      localStorage.setItem('current-user', JSON.stringify({ username, newPassword, isAdmin }));
      this.currentUser = user;
      this.router.navigate(['']);
    });
  }

}
