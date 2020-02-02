import { Component, OnInit } from '@angular/core';
import { MzModalService } from 'ngx-materialize';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private modalService: MzModalService) { }

  public openModalTask() {
    this.modalService.open(AddTaskComponent);
  }

}
