import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

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
import { ExploreComponent } from './explore/explore.component';
import { NotesComponent } from './dashboard/notes/notes.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { CoursesComponent } from './dashboard/courses/courses.component';
import { NoteComponent } from './dashboard/notes/note/note.component';
import { QnaComponent } from './qna/qna.component';
import { UserComponent } from './qna/users/user/user.component';
import { UsersComponent } from './qna/users/users.component';
import { QuestionsComponent } from './qna/questions/questions.component';
import { QuestionComponent } from './qna/questions/question/question.component';
import { AskComponent } from './qna/ask/ask.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';

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
    CoursesComponent,
    NoteComponent,
    QnaComponent,
    UserComponent,
    UsersComponent,
    QuestionsComponent,
    QuestionComponent,
    AskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatPaginatorModule,
    MatGridListModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
