import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from './user/users.service';

@Injectable({
    providedIn: 'root',
})

export class AuthGuard implements CanActivate {

    constructor(private userService: UsersService) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.userService.isLogged === route.data.isLogged;
    }
}
