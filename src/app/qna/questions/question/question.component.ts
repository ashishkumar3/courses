import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../../question.model';
import { Answer } from '../../answer.model';
import { UserService } from '../../users/user/user.service';
import { User } from 'src/app/qna/users/user/user.model';
import { Comment } from '../../comment.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  ques_id: number;
  question: Question;
  answers: Answer[];
  comments: Comment[];
  users: User[];

  constructor(private questionService: QuestionService, private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {

    // get the id from the url params
    this.ques_id = +this.activatedRoute.snapshot.paramMap.get("id");

    // fetch the question with id as ques_id
    this.questionService.fetchQuestionDetails(this.ques_id).subscribe(response => {
      console.log(response);
      this.question = response['question'][0];
      this.answers = response['answers'];
      this.comments = response['comments'];
      this.users = response['users'];

      this.question.question_by = this.users.find(user => user.id === this.question.user_id).name;

      for (let ans of this.answers) {
        ans.answer_by = this.users.find(user => user.id === ans.user_id).name;
      }

      for (let cmnt of this.comments) {
        cmnt.comment_by = this.users.find(user => user.id === cmnt.user_id).name;
      }

    });
  }

}
