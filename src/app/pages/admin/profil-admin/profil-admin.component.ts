import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/User/users';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-profil-admin',
  templateUrl: './profil-admin.component.html',
  styleUrls: ['./profil-admin.component.css']
})
export class ProfilAdminComponent  implements OnInit{
  constructor(private auths:UserService){}
  user=new Users()

  ngOnInit(): void {
    this.user=this.auths.getUser();

  }


}
