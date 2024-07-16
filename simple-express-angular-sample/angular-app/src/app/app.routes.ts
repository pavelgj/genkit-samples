import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MenuComponent } from './menu/menu.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'menu',
        component: MenuComponent,
    },
    {
        path: 'contact',
        component: ContactUsComponent,
    },
    { path: '**', redirectTo: '/home' },

];
