import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/User/users';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-sidbar',
  templateUrl: './sidbar.component.html',
  styleUrls: ['./sidbar.component.css']
})
export class SidbarComponent implements OnInit {
  constructor(private auths: UserService, private route: Router) { }
  users = new Users

  ngOnInit(): void {
    this.users=this.auths.getUser();





  }
}

