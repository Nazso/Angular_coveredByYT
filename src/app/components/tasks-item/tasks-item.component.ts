import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Task } from '../../Interface/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
// import { TASKS } from 'src/app/mock-tasks';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.scss']
})
export class TasksItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter;
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter;

  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Task): void {
    // console.log(this.task)
    this.onDeleteTask.emit(task)
  }

  onToggle(task: Task): void {
    this.onToggleReminder.emit(task)
  }

}
