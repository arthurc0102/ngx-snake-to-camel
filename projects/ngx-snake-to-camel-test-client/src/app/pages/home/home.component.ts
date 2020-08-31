import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Response } from './../../models/response.model';
import { User } from './../../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  users$!: Observable<Response<User>>;

  private url = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.users$ = this.http.get<Response<User>>(this.url);
  }
}
