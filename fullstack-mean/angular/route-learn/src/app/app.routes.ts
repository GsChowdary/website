import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConatctComponent } from './conatct/conatct.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'contact',
        component: ConatctComponent,
        title: 'Contact Page'
    },
    {
        path: 'about',
        component: AboutComponent,
        title: 'About Page'
    }
];
