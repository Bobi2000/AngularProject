import { RouterModule, Routes } from '@angular/router'; 
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { IndexComponent } from './boards/index/index.component';
import { DetailsComponent } from './boards/details/details.component';
import { CreateBoardComponent } from './boards/create-board/create-board.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [AuthGuard],
        data: {
            isLogged: false
        },
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [AuthGuard],
        data: {
            isLogged: false
        },
    },
    {
        path: 'boards',
        component: IndexComponent,
    },
    {
        path: 'boards/create',
        component: CreateBoardComponent,
        canActivate: [AuthGuard],
        data: {
            isLogged: true
        }
    },
    {
        path: 'boards/details/:id',
        component: DetailsComponent,
        data: { shouldFetchBoard: true }
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
