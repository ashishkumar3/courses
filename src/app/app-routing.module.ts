import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogComponent } from './blogs/blog/blog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IsLoggedInGuard } from './auth/is-logged-in.guard';
import { IsLoggedOutGuard } from './auth/is-logged-out.guard';
import { ExploreComponent } from './explore/explore.component';
import { LogoutComponent } from './logout/logout.component';
import { NotesComponent } from './dashboard/notes/notes.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { CoursesComponent } from './dashboard/courses/courses.component';
import { QnaComponent } from './qna/qna.component';
import { UserComponent } from './qna/users/user/user.component';
import { UsersComponent } from './qna/users/users.component';
import { QuestionComponent } from './qna/questions/question/question.component';
import { QuestionsComponent } from './qna/questions/questions.component';

// Routes
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent, canActivate: [IsLoggedOutGuard] },
  { path: 'login', component: LoginComponent, canActivate: [IsLoggedOutGuard] },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'notes', component: NotesComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'courses', component: CoursesComponent },
      { path: '', redirectTo: 'profile', pathMatch: 'full' }
    ],
    canActivate: [IsLoggedInGuard]
  },
  {
    path: 'qna',
    component: QnaComponent
  },
  {
    path: 'qna/users/:id',
    component: UserComponent
  },
  {
    path: 'qna/users',
    component: UsersComponent
  },
  {
    path: 'qna/questions/:id',
    component: QuestionComponent
  },
  {
    path: 'qna/questions',
    component: QuestionsComponent
  },
  { path: 'explore', component: ExploreComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'blogs/:id', component: BlogComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }