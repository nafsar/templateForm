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

  userNamePattern = "[a-zA-Z]*";
  emailPattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
  jobs = ['', 'Consultant', '','Engineer', 'Student',
    '', 'Recruiter'];

  model = new Data('', this.jobs[0], '');

  submitted = false;
  title = 'name';
  emailAddress = 'Email Address';
  text = 'Message';
  jobRes = ''; titleRes = ''; textRes = '';
  onSubmit(result) {
    this.titleRes = result.name;
    this.jobRes = result.myJobs;
    this.textRes = result.myEmail;
    this.submitted = true;
  }


}

export class Data {
  constructor(
    public name?: string,
    public myJobs?: string,
    public myEmail?: string
  ) { }

}
