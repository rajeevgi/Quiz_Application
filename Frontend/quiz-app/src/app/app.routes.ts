import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { authGuard } from './auth.guard';
import { UpdateUserComponent } from './pages/update-user/update-user.component';
import { QuizAttemptComponent } from './pages/quiz-attempt/quiz-attempt.component';
import { ScoreboardComponent } from './pages/scoreboard/scoreboard.component';
import { CreateQuizComponent } from './pages/create-quiz/create-quiz.component';

export const routes: Routes = [
  // Default route
  {
    path: '',
    redirectTo: 'app-login',
    pathMatch: 'full'
  },

  {
    path: 'app-login',
    component: LoginComponent
  },

  {
    path: 'app-home',
    component: HomeComponent,
    canActivate: [authGuard]
  },

  {
    path: 'app-dashboard',
    component: DashboardComponent,
    canActivate: [authGuard]
  },

  {
    path: 'app-quiz',
    component: QuizComponent,
    canActivate: [authGuard]
  },

  {
    path:'app-create-quiz',
    component: CreateQuizComponent,
    canActivate:[authGuard]
  },

  {
    path: 'app-quiz-attempt/:id',
    component: QuizAttemptComponent,
    canActivate: [authGuard]
  },

  {
    path: 'app-update-user/:id',
    component: UpdateUserComponent,
    canActivate: [authGuard]
  },

  {
    path: 'app-scoreboard',
    component: ScoreboardComponent,
    canActivate: [authGuard]
  },

  {
    path: '**',
    redirectTo: 'app-login',
    pathMatch: 'full'
  },
];
