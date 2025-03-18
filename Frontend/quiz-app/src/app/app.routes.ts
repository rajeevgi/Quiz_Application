import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { authGuard } from './auth.guard';
import { UpdateUserComponent } from './pages/update-user/update-user.component';

export const routes: Routes = [
  // Default route
  {
    path: '',
    redirectTo: 'app-login',
    pathMatch: 'full',
  },

  {
    path: 'app-login',
    component: LoginComponent,
  },

  {
    path: 'app-home',
    component: HomeComponent,
    canActivate:[authGuard]
  },

  {
    path: 'app-dashboard',
    component: DashboardComponent,
    canActivate:[authGuard]
  },

  {
    path: 'app-quiz',
    component: QuizComponent,
    canActivate:[authGuard]
  },

  {
    path:'app-update-user/:id',
    component:UpdateUserComponent
  },

  {
    path: '**',
    redirectTo: 'app-login',
    pathMatch: 'full',
  },
];
