import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  emails = ['', 'naser@angular.io', 'templateFormat@angular.io', 'test@gm.com',
    '', 'form@uiux.bi'];

  model = new Data('Earth', this.emails[0], 'Angular Template Driven Forms');

  submitted = false;
  title = 'name';
  emailAddress = 'Email Address';
  text = 'Message';
  emailAddressRes = ''; titleRes = ''; textRes = '';
  onSubmit(result) {
    this.titleRes = result.name;
    this.emailAddressRes = result.myEmails;
    this.textRes = result.textMessage;
    this.submitted = true;
  }


}

export class Data {
  constructor(
    public name: string,
    public myEmails?: string,
    public textMessage?: string
  ) { }

}
