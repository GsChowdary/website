import { Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { LoginComponent } from './login/login.component';
import { QueryComponent } from './query/query.component';
import { RouteGuardService } from './route-guard.service';
import { NewCourseComponent } from './new-course/new-course.component';

export const routes: Routes = [
    {
        path: 'course',
        component: CoursesComponent,
        title: 'Manage Courses',
        canActivate: [RouteGuardService]
    },
    {
        path: 'new-course',
        component: NewCourseComponent,
        title: 'New Course',
        canActivate: [RouteGuardService]
    },
    {
        path: 'new-course/:id',
        component: NewCourseComponent,
        title: 'Edit Course',
        canActivate: [RouteGuardService]
    },
    {
        path: '',
        component: LoginComponent,
        title: 'Login',
    },
    {
        path: 'query',
        component: QueryComponent,
        title: 'User Query',
        canActivate: [RouteGuardService]
    },
    { path: '**', component: LoginComponent },
];
