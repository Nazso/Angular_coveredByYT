import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../Interface/Task';
// import { TASKS } from 'src/app/mock-tasks';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private url = "http://localhost:5000/tasks";

  constructor(private http: HttpClient) { }

  getTask(): Observable<Task[]> {
    // const tasks = of(TASKS);
    // return tasks;
    return this.http.get<Task[]>(this.url)
  }

  deleteTask(task: Task): Observable<Task> {
    const deleteUrl = `${this.url}/${task.id}`;
    return this.http.delete<Task>(deleteUrl);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const deleteUrl = `${this.url}/${task.id}`;
    return this.http.put<Task>(deleteUrl, task, httpOptions)
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.url, task, httpOptions)
  }

}
