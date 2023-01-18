import { Component, OnInit } from '@angular/core';
import { RegserService } from '../regser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private rs: RegserService, private router: Router) { }

  ngOnInit() {
  }

  data = [];

  onSubmit(v) {
    console.log(v);
    this.rs.addRegData(v).subscribe(data => {
      alert(data);
      // this.router.navigate(['/login']);
    });

  }


}
