import { LOGIN } from './../queries/Login';
import { Apollo } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  form = {
    username: null,
    password: null
  }

  constructor(
    private apollo: Apollo
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    this.apollo.mutate({
      mutation: LOGIN,
      variables: {
        email: this.form.username,
        password: this.form.password
      }
    }).subscribe((res) => {
      console.log(res);
    })
  }

}
