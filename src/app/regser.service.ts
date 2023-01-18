import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegserService {

  constructor(private http:HttpClient) { }

  addRegData(v):Observable<any>
  {
    
    return this.http.post('/register',v);
  }


  
}
