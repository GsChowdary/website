import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Course{
  _id?: string,
  name: string;
  duration: string;
  description: string;
  show: boolean;
}

export interface Query{
  _id?: string,
  name: string;
  email: string;
  query: string;
  phone: string;
}
@Injectable({
  providedIn: 'root',
})
export class ApiService {

  baseUrl = 'http://localhost:3000';
  static activeSession = new BehaviorSubject<boolean>( sessionStorage.getItem('access_token')? true: false);
  static activeSession$ = ApiService.activeSession.asObservable();

  constructor(private httpClient: HttpClient) { }

  login(username: any, password: any){

    //API Call
    return this.httpClient.post(this.baseUrl+'/auth/login',{username, password});
    
  }

  async doLogin(username: any, password: any) {
    // Default options are marked with *
    const response = await fetch(this.baseUrl+'/auth/login', {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({username, password}), // body data type must match "Content-Type" header
    });
    const data = await response.json(); // parses JSON response into native JavaScript objects
    if(data?.access_token){
      sessionStorage.setItem('access_token', data.access_token);
      ApiService.activeSession.next(true);
      return true;
    }else{
      return false;
    }
  }

  getJWTToken(){
    return sessionStorage.getItem('access_token');
  }

  async newCourse(courseData: any) {
    // Default options are marked with *
    const response = await fetch(this.baseUrl+'/course', {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer "+ this.getJWTToken(),
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({...courseData}), // body data type must match "Content-Type" header
    });
    const data = await response.json(); // parses JSON response into native JavaScript objects
    if(data){
      return true;
    }else{
      return false;
    }
  }

  async updateCourse(id: string, courseData: any) {
    // Default options are marked with *
    const response = await fetch(this.baseUrl+'/course/'+id, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer "+ this.getJWTToken(),
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({...courseData}), // body data type must match "Content-Type" header
    });
    const data = await response.json(); // parses JSON response into native JavaScript objects
    if(data){
      return true;
    }else{
      return false;
    }
  }

  async deleteCourse(id: string) {
    // Default options are marked with *
    const response = await fetch(this.baseUrl+'/course/'+id, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer "+ this.getJWTToken(),
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    const data = await response.json(); // parses JSON response into native JavaScript objects
    if(data){
      return true;
    }else{
      return false;
    }
  }
  

  getCourses() : Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.baseUrl+'/course');
  }

  getQueries() : Observable<Query[]> {
    return this.httpClient.get<Query[]>(this.baseUrl+'/query', {
      headers: {
      "Authorization": "Bearer "+ this.getJWTToken(),
    }
  });
  }

  getCourse(id: string) : Observable<Course> {
    return this.httpClient.get<Course>(this.baseUrl+'/course/'+id);
  }

  logout(){
    sessionStorage.removeItem('access_token');
    ApiService.activeSession.next(false);
  }
}
