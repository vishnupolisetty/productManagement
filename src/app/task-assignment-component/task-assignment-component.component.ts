import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-task-assignment-component',
  templateUrl: './task-assignment-component.component.html',
  styleUrls: ['./task-assignment-component.component.css']
})
export class TaskAssignmentComponentComponent implements OnInit {

  taskName: string | undefined;
  assignedTo: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  assignTask() {
    // Implement the logic to assign the task
    console.log(`Task "${this.taskName}" assigned to ${this.assignedTo}`);
  }

}
