import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-career-dialog',
  templateUrl: './career-dialog.component.html',
  styleUrls: ['./career-dialog.component.scss'],
})
export class CareerDialogComponent implements OnInit {

  public data;
  public disable;
  public career;
  public index;

  constructor(
    protected ref: NbDialogRef<CareerDialogComponent>,
  ) {
  }

  ngOnInit() {
    this.career = this.data.data;
    this.index = this.data.source.indexOf(this.career);
  }

  cancel() {
    this.ref.close(this.data);
  }

  confirm() {
    this.data[this.index] = this.career;
    this.ref.close(this.data);
  }

}
