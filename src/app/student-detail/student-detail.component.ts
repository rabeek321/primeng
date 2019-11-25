import { Component, OnInit, Input } from '@angular/core';
import { ITable } from '../table';
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  @Input() candidate: ITable;
  display: boolean = false;
  constructor() { }

  ngOnInit() {
    this.display = true;
  }

}
