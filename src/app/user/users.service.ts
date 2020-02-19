import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  currentUser: { username: string, password: string } = null;

  get isLogged() {
    return !!this.currentUser;
  }

  users: IUser[];

  constructor(private http: HttpClient) {
    const currentUser = localStorage.getItem('current-user');
    this.currentUser = currentUser ? JSON.parse(currentUser) : null;
  }

  loadUsers() {
    this.http.get<IUser[]>('https://localhost:44331/api/users').subscribe(users => {
      this.users = users;
    });
  }

  login(username: string, password: string) {
    localStorage.setItem('current-user', JSON.stringify({ username, password }));
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('current-user');
  }

}
