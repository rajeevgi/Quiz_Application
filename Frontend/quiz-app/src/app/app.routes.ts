import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { QuizComponent } from './pages/quiz/quiz.component';

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
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },

      {
        path: 'quiz',
        component: QuizComponent,
      },
    ],
  },

  {
    path: '**',
    redirectTo: 'app-login',
    pathMatch: 'full',
  },
];
