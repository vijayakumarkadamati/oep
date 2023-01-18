import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-usercpp1',
  templateUrl: './usercpp1.component.html',
  styleUrls: ['./usercpp1.component.css']
})
export class Usercpp1Component implements OnInit {

  constructor(private qs:QuestionService) { }
  examdata:any[]=[];
  correctanswer:any[]=[];
  marks:number=0;
  result:any[]=[];
  f:boolean=false;
  interval:any;
  timeLeft :number = 10;
  resultPrinted : boolean = false;
  ngOnInit() {
    this.qs.exam().subscribe(x=>{this.examdata=x})
    this.startTimer();  
  }
  

  onoptchange(que, ans){

    var ques = this.examdata[que-1].questionno;
    var ans=ans.option;
    this.result[que-1]={ques,ans};
   // console.log(ques);
  }


  submitedData(){
    confirm("are you sure ! you want to submit the exam")
  

    for(let i=0;i<this.examdata.length;i++)
        {
           var qno= this.examdata[i].questionno;
           var crtansr = this.examdata[i].correctanswer;
           //this.correctanswer[i] ={qno,crtansr} 
           if(undefined !=this.result[i] && crtansr === this.result[i].ans)
           {
             this.marks++
             console.log(this.marks)
           }
          
        }
        console.log("user result" + this.result)
        /*console.log(this.correctanswer);
        console.log(this.result)          

        for(let i=0; i<this.correctanswer.length; i++){
          for(let j=i; j<=i; j++){
            if(this.correctanswer[i].crtansr === this.result[j].ans){
              this.marks++;
            }
          }
        } */
        this.f=!this.f;
        //alert("your enterd "+this.marks + " correct answers");
       
  }




  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;

      } /*else {
        this.timeLeft = 500;
        
      }*/

      if(!this.resultPrinted && this.timeLeft == 0)
      {
        this.resultPrinted = true;
        this.submitedData();
      }
    },1000)
  }
  
  

}
