import { Component } from '@angular/core';
import { MzBaseModal, MzModalComponent } from 'ngx-materialize';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent extends MzBaseModal {

  constructor() {
    super();
  }
}
