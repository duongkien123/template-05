import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: string = '';
  password: string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  abc(){
    this.router.navigate(['register'])
  }
  login() {
    if (this.user == 'admin' && this.password == '1234') {
      sessionStorage.setItem('user', this.user);
      this.router.navigate(['main'])
    } else {
      alert('Sai tài khoản mật khẩu!');
    }
  }
}
