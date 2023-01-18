import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-adminc1',
  templateUrl: './adminc1.component.html',
  styleUrls: ['./adminc1.component.css']
})
export class Adminc1Component implements OnInit {

  constructor(private qs:QuestionService) { }
questionData:object[]=[];
data=[];
  ngOnInit() {
    console.log('data');
    this.qs.receiveQuestion().subscribe(a=>this.questionData=a);
  }

  
  onSubmit(v){
    console.log(v);
    this.qs.adminc1QuetionData(v).subscribe(b=>this.data=b);
  }

}
