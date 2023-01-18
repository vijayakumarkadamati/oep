import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient,private route:Router) { }

  addQuestion(v):Observable<any>{
    return this.http.post('/question',v);
  }

  addAnswersData(a):Observable<any>{
    console.log('service');
    return this.http.post('/userc1/addquestion',a);
  }

  receiveQuestion():Observable<any>{
    console.log('datais in ser')
    return this.http.get('/userc1/question');
  }

  receiveCpp1Question():Observable<any>{
    return this.http.get('/usercpp1/question');
  }

  adminc1QuetionData(b):Observable<any>{
    return this.http.post('/adminc1/question',b);
  }
  exam():Observable<any[]>
  {
   return this.http.get<any[]>("assets/exam.json")
  }
  key():Observable<any[]>
  {
    return this.http.get<any[]>("assets/key.json"); 
  }

  examdata():Observable<any[]>
  {
    return this.http.get<any[]>(this.route.url)
  }
}
