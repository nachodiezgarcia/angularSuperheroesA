import { Routes } from '@angular/router';
import { heroResolver } from './shared/guards/hero.resolver';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home').then((c) => c.Home)
    },
    {
        path: 'hero',
        children: [
            {
                path: 'new',
                loadComponent: () => import('./pages/hero/hero-new/hero-new').then((c) => c.HeroNew)
            },
            {
                path: 'update/:id',
                loadComponent: () => import('./pages/hero/hero-update/hero-update').then((c) => c.HeroUpdate),
                resolve: { hero: heroResolver }
            },
            {
                path: ':id',
                loadComponent: () => import('./pages/hero/hero-detail/hero-detail').then((c)=> c.HeroDetail)
            },
        ]
    },
    {
        path: 'auth',
        children: [
            {
                path: 'login',
                loadComponent: () => import('./pages/auth/login/login').then((c)=>c.Login)
            },
            {
                path: 'register',
                loadComponent: () => import('./pages/auth/register/register').then((c)=>c.Register)
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
