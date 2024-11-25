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
  namePattern = /^[A-Za-z]/;

  ngOnInit(): void {
  }
  signup() {
    if (!this.user.nom || !this.user.prenom || !this.user.password || !this.user.role || this.user.role === 'Choose a role') {
      this.snack.open('Tous les champs sont obligatoires', '', {
        duration: 3000,
      });
    }
    else if (!this.namePattern.test(this.user.nom) || !this.namePattern.test(this.user.prenom)) {
      this.snack.open('Le nom et le prénom doivent contenir uniquement des  lettere', '', {
        duration: 3000,
      });
    }
    this.auths.register(this.user).subscribe(
      (res: any) => {

        console.log(res);
        Swal.fire('Succes !!', 'User registred', 'success').then((e) => {
          this.route.navigate(['login'])
        })
      }, (error) => {
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
