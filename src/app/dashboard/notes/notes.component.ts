import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  title: string = '';
  description: string = '';

  errorMessage: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (form.value) {
      // post the note
      if (form.value.title.length < 1 || form.value.description.length < 1) {
        this.errorMessage = "Write something atleast!";
        return;
      }
      fetch('http://localhost:3000/api/v1/notes/create', {
        method: 'POST',
        body: JSON.stringify(form.value),
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${localStorage.token}`
        }
      }).then(res => {
        if (res.ok) {
          console.log('RESPONSE IS OK!');
          return res.json();
        }
        return res.json().then(err => {
          throw new Error(err.message);
        });

      }).then(result => {
        console.log(result, "I GOT THIS!");
      }).catch(err => this.errorMessage = err.errorMessage);
    }
  }

}
