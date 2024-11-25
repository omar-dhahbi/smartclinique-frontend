import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/User/users';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-admin-welcome',
  templateUrl: './admin-welcome.component.html',
  styleUrls: ['./admin-welcome.component.css']
})
export class AdminWelcomeComponent implements OnInit {
  constructor(private users: UserService, private route: Router) { }
 user = new Users()
  Array: any = []
  search=""
  ngOnInit(): void {
   this.getData()
  }
  getData(){
 this.users.getData().subscribe(
      (data: any) => {
        this.Array = data.filter((user: Users) => user.role === 'Medcine' || user.role === 'Patient');
        console.log(data);
      }, (error) => {
        console.log(error)
      }
    )
  }



}


