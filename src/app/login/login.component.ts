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
    if ((this.x == 'admin' && this.auths.IsLoggedIn()) || (this.x === '**' && this.auths.IsLoggedIn())) {
      this.router.navigate(['admin']);
    } else if ((this.x == 'patient' && this.auths.IsLoggedIn()) || (this.x === '**' && this.auths.IsLoggedIn())) {
      this.router.navigate(['patient']);
    }
    else if ((this.x == 'medcine' && this.auths.IsLoggedIn()) || (this.x === '**' && this.auths.IsLoggedIn())) {
      this.router.navigate(['medcine']);
    }

  }
  login() {
    this.auths.login(this.user).subscribe(
      (data: any) => {
        this.auths.SetToken(data.token);
        this.auths.setUser(data.user);
        this.auths.setRole(data.user.role);
        console.log(data.user.role);
        if (data.role == 'admin') {
          this.router.navigate(['/admin']);
          this.auths.loginstatussubject.next(true)
        }
        else if (data.role == 'patient') {
          this.router.navigate(['/patient']);
          this.auths.loginstatussubject.next(true)
        }
        else if (data.role == 'medcine') {
          this.router.navigate(['/medcine']);
          this.auths.loginstatussubject.next(true)
        }
        else {
          this.auths.logout()
        }
      }, (error) => {
        console.log('Error')
        this.snack.open(error.error.error, '', {
          duration: 3000
        })
        console.log(error.error.error)
      }
    )
  }
}