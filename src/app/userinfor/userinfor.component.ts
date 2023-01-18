import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userinfor',
  templateUrl: './userinfor.component.html',
  styleUrls: ['./userinfor.component.css']
})
export class UserinforComponent implements OnInit {
  profileData:object[]=[];
  constructor(private us:UserService ) { }

  ngOnInit() {
    this.us.receiveProfileData().subscribe(a=>this.profileData=a);
  }
  



}
