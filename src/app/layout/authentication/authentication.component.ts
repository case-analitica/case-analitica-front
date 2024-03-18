import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
  standalone: true,
  imports: [RouterModule],
})
export class AuthenticationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
