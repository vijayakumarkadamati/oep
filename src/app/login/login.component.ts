import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private ls:LoginService) { }

  ngOnInit() {
  }

  onLogin(v) {
    this.ls.loginData(v).subscribe(x => {
      if (x['msg'] == "admin") {
        this.router.navigate(['/admin']);
      }
      else if (x['msg'] == "user") {
        this.router.navigate(['/user']);
      }
      else {
        alert(x['msg']);
      }
    })
  }
}
