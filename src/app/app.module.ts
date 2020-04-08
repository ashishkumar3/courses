import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
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
  { path: 'explore', component: ExploreComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    BlogsComponent,
    BlogComponent,
    PageNotFoundComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    ExploreComponent,
    NotesComponent,
    ProfileComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
