import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
    {
        path: 'article',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/article/create'
            },
            {
                path: 'create',
                component: CreateComponent,
                canActivate: [AuthGuard],
                data: {
                    isLogged: true
                }
            },
            {
                path: 'detail/:id',
                component: DetailComponent,
                data: { shouldFetchArticle: true }
            },
            {
                path: 'edit/:id',
                component: EditComponent
            }
        ]
    },
];

export const ArticleRoutingModule = RouterModule.forChild(routes);
