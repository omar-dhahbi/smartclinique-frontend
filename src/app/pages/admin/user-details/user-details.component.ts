import { Users } from 'src/app/models/User/users';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  constructor(private users: UserService, private router: ActivatedRoute) { }
  id: any
  user = new Users
  detailsUser:any=[]

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    console.log(this.id);
    this.users.getUserById(this.id).subscribe((data: any) => {
      this.detailsUser = data;
      console.log(data)
    })
  }
}
