import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TaskService } from '../../task/task.service';
import { Task } from '../../task/task.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit {

  constructor(private taskService: TaskService) { }
  newtask: Task = { description: '', completed: false };
  task: Task[] = [];
  createtask(): void {
    this.taskService.createtask(this.newtask).subscribe((data) => {
      this.newtask = { description: '', completed: false };
    });
    this.taskService.getalltasks().subscribe((data) => {
      this.task = data;
      console.log(this.task);
    });
  }
  ngOnInit(): void {
    this.taskService.getalltasks().subscribe((data) => {
      this.task = data;
      console.log(this.task);
    });
  }



}
