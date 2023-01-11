import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task:Task = {title: "", completed: false, url: "", comment: ""};
  @Output() onClicked = new EventEmitter();

  constructor(){}

  ngOnInit(): void {
      
  }

  onClick(){
    this.onClicked.emit()
  }

}
