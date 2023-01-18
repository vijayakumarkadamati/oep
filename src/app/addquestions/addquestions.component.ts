import { Component, OnInit } from '@angular/core';
import { RegserService } from '../regser.service';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-addquestions',
  templateUrl: './addquestions.component.html',
  styleUrls: ['./addquestions.component.css']
})
export class AddquestionsComponent implements OnInit {

  constructor(private qs:QuestionService) { }

  ngOnInit() {
  }

  data=[];
  onUpload(v){
  console.log(v);
  this.qs.addQuestion(v).subscribe(data=>this.data=data);  
  }

}
