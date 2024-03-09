import { Routes } from '@angular/router';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'course',
        loadChildren: () => import('./modules/course/course.module').then(m => m.CourseModule)
    },
    {
        path: 'calendar',
        loadChildren: () => import('./modules/calendar/calendar.module').then(m => m.CalendarModule)
    },
    {
        path: 'chat',
        loadChildren: () => import('./modules/chat/chat.module').then(m => m.ChatModule)
    },
    {
        path: 'forum',
        loadChildren: () => import('./modules/forum/forum.module').then(m => m.ForumModule)
    },
    {
        path: 'playground',
        loadChildren: () => import('./modules/playground/playground.module').then(m => m.PlaygroundModule)
    },
    {
        path: 'profile',
        loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule)
    },
    {
        path: 'streaming',
        loadChildren: () => import('./modules/streaming/streaming.module').then(m => m.StreamingModule)
    },
    {
        path: 'auth',
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'not-found',
        component: NotFoundComponent,
    },
];
