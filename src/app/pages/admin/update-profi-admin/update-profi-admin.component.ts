import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-update-profi-admin',
  templateUrl: './update-profi-admin.component.html',
  styleUrls: ['./update-profi-admin.component.css']
})
export class UpdateProfiAdminComponent implements OnInit {
  constructor(private route: ActivatedRoute, private auths: UserService, private router: Router, private snack: MatSnackBar) { }
  data: any = []
  id: any
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.auths.getUserById(this.id).subscribe(
      (res: any) => {
        this.data = res
        console.log(this.data)
      })
  }
  updateUser() {


  }
  
}
