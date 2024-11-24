import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  // public loginstatussubject = new Subject<boolean>();
  login(data: any) {
    return this.http.post('http://localhost:8080/auth/login', data);
  }
  register(data: any) {
    return this.http.post('http://localhost:8080/auth/signup', data)
  }
  SetToken(token: string) {
    localStorage.setItem('token', token);
    return true
  }
  setRole(role: string) {
    localStorage.setItem('role', role);
    return true;
  }
  getRole() {
    return localStorage.getItem('role');

  }
  IsLoggedIn() {
    let tokenStr = localStorage.getItem('token')
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false
    }
    else {
      return true
    }
  }

  logout() {
    localStorage.clear()
    return true
  }
  getToken() {
    return localStorage.getItem('token')
  }
  setUser(user: any) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  getUser() {
    let StrUser = localStorage.getItem('user')
    if (StrUser != null) {
      return JSON.parse(StrUser);
    }
    else {
      this.logout();
      return null
    }
  }
  getUserById(id: number) {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.get('http://localhost:8080/Admin/' + id, { headers })

  }
  getData() {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.get('http://localhost:8080/Admin/all', { headers })
  }
}
