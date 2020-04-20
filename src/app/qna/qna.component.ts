import { Component, OnInit, QueryList } from '@angular/core';
import { Question } from './question.model';
import { QnaService } from './qna.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-qna',
  templateUrl: './qna.component.html',
  styleUrls: ['./qna.component.css']
})
export class QnaComponent implements OnInit {

  questions: Question[] = [];

  constructor(private qnaService: QnaService) { }

  ngOnInit(): void {
    this.getAllQuestions();
  }

  private getAllQuestions() {
    this.qnaService.fetchAllQuestions().subscribe(response => {
      this.questions = response;
    }, (error: HttpErrorResponse) => {
      console.log(error.message);
    });
  }

}
