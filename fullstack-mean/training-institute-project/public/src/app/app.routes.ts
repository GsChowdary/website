import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        component: HomeComponent,
        title: 'Home',
        path: '',
    },
    {
        component: AboutComponent,
        title: 'About',
        path: 'about',
    },
    {
        component: ContactComponent,
        title: 'Conatct',
        path: 'contact',
    }
];
