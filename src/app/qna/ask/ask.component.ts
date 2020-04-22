import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AskService } from './ask.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {

  questionDetails: { title: string; description: string; };

  // Design
  modal: boolean = false;

  constructor(private askService: AskService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.questionDetails = form.value;
    console.log(form.value);
    this.submitQuestion();
  }

  submitQuestion() {
    this.askService.postQuestion(this.questionDetails).subscribe(response => {
      console.log(response);
      this.router.navigate(['qna/questions/', response.question.id]);
    }, error => {
      console.log(error);
    });
  }

  toggleModal() {
    this.modal = !this.modal;
  }

}
