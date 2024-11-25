import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/User/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Users } from '../models/User/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private auths: UserService, private router: Router, private snack: MatSnackBar) { }
  user = new Users()
  x = localStorage.getItem('role');

  ngOnInit(): void {
    if ((this.x == 'Admin' && this.auths.IsLoggedIn()) || (this.x === '**' && this.auths.IsLoggedIn())) {
      this.router.navigate(['admin']);
    } else if ((this.x == 'Patient' && this.auths.IsLoggedIn()) || (this.x === '**' && this.auths.IsLoggedIn())) {
      console.log(this.x);
      this.router.navigate(['Patient']);
    }
    else if ((this.x == 'Medcine' && this.auths.IsLoggedIn()) || (this.x === '**' && this.auths.IsLoggedIn())) {
      this.router.navigate(['medcine']);
    }

  }
  login() {

    this.auths.login(this.user).subscribe(
      (data: any) => {
        this.auths.SetToken(data.token);
        this.auths.setUser(data.user);
        this.auths.setRole(data.role);
        if (data.role == 'Admin') {
          this.router.navigate(['Admin']);
          // this.auths.loginstatussubject.next(true)
        }
        else if (data.role == 'Patient') {
          this.router.navigate(['Patient']);
          // this.auths.loginstatussubject.next(true)
        }
        else if (data.role == 'Medcine') {
          this.router.navigate(['Medcine']);
          // this.auths.loginstatussubject.next(true)
        }
        else {
          this.auths.logout()
        }
      }, (error) => {
        // this.snack.open(error.error, '', {
        //   duration: 3000
        // })
        console.log(error)
        if(error.status===401){
          this.snack.open('Incorrect email or password', '', {
            duration: 3000,
          });
        }

      }
    )
  }
}
