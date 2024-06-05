import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  createtask(newtask: Task): Observable<Task> {
    return this.http.post<Task>('http://localhost:8081/api/task', newtask);
  }
  getalltasks(): Observable<Task[]> {
    return this.http.get<Task[]>('http://localhost:8081/api/task');
  }

}
