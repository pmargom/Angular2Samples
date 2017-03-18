import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthHttp } from 'angular2-jwt';
import { RequestOptions, RequestMethod, Headers } from "@angular/http";

@Injectable()
export class TaskListService {

  private static TASKS_ENDPOINT = 'https://wt-6e6e0a8ae36c5e4ff4352e5921e8a8f8-0.run.webtask.io/tasks';

  constructor(private authHttp: AuthHttp) { }

  loadTasks$(): Observable<any> {
    //console.log('TaskListService -> loadTasks$ -> JWD token: ', localStorage.getItem('id_token'));
    return this.authHttp.get(TaskListService.TASKS_ENDPOINT);
    // var myHeaders: Headers = new Headers();
    // myHeaders.append('Content-Type', 'application/json');
    // myHeaders.append('Authorization', ['Bearer', localStorage.getItem('id_token')].join(' '));
    // console.log('myHeaders -> ', myHeaders);
    // let options: RequestOptions = new RequestOptions({
    //   method: RequestMethod.Get,
    //   headers: myHeaders
    // });

    // return this.authHttp.get(TaskListService.TASKS_ENDPOINT, options);
  }
    
  addTask$(task) : Observable<any> {
    return this.authHttp.post(TaskListService.TASKS_ENDPOINT,
      { description: task });
  }
    
  deleteTask$(task): Observable<any> {
    return this.authHttp.delete(TaskListService.TASKS_ENDPOINT +
      '?id=' + task._id);
  }

}
