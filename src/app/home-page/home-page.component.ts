import { Component, OnInit } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
public resp =false;
public fail;
  constructor(private _http:HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      const email = contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this._http.post('https://formspree.io/xjvawjyq',
        { name: email.name, replyto: email.email, subject : email.subject, message: email.message },
        { 'headers': headers }).subscribe(
          response => {
            if(response)this.resp=true 
            else this.fail=true;

            console.log(this.resp);
            console.log(email);
          }
        );
    }
  }

}
