import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../Interface/Task';
import { TASKS } from 'src/app/mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTask().subscribe(
      (tasks) => this.tasks = tasks)
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task).subscribe(
      () => this.tasks = this.tasks.filter(
        (t) => t.id !== task.id
      )
    )
  }

  toggleReminder(task: Task): void {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe()
    console.log(task.reminder);
  }

  addTask(task: Task): void {
    this.taskService.addTask(task).subscribe(
      (task) => this.tasks.push(task)
    )
    console.log('Task is addaed!')
    console.log(task)
  }

}
