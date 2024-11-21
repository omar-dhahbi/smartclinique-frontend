import { Users } from './../models/User/users';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/User/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  constructor(private auths: UserService, private snack: MatSnackBar, private route: Router) { }
  file!: File;
  user = new Users()
  ngOnInit(): void {
  }
  signup() {
    let formData = new FormData();
    formData.append('nom', this.user.nom);
    formData.append('prenom', this.user.prenom);
    formData.append('email', this.user.email);
    formData.append('password', this.user.password)
    if (this.file) {
      formData.append('photo', this.user.photo, this.user.photo.name)
    }
    formData.append('role', this.user.role);
    this.auths.register(formData).subscribe(
      (res: any) => {
        console.log(res)
        Swal.fire('Succes !!', 'User registred', 'success').then((e) => {
          this.route.navigate(['login'])
        })
      }, (error) => {
        console.log(Object.values(error.error.error)[0])
        const erors = Object.values(error.error.error)[0]
        this.snack.open(erors + '', '', {
          duration: 3000
        })
        console.log(error)
      }
    )
  }
  uploadImage(event: any) {
    this.file = event.target.files[0];
    this.user.photo = this.file
    console.log(this.file);
  }
}