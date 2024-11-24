import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/User/users';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private auths: UserService,private route:Router) { }
  user = new Users()
  ngOnInit(): void {
    this.user = this.auths.getUser()
  }
  logout(){
    this.auths.logout();
    this.route.navigate(['login'])
  }

}
