import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Interface/Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<any> = new EventEmitter;

  text: string | undefined;
  day: string | undefined;
  reminder: boolean = false;

  showAddTask: boolean = false;
  subscription: Subscription | undefined;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(
      value => this.showAddTask = value
    )
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if(!this.text) {
      alert('Please add a task!');
      return
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;

  }

}
