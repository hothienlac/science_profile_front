import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-total-researches-dialog',
  templateUrl: './total-researches-dialog.component.html',
  styleUrls: ['./total-researches-dialog.component.scss'],
})
export class TotalResearchesDialogComponent implements OnInit {

  public data;
  public disable;
  public del;

  constructor(
    protected ref: NbDialogRef<TotalResearchesDialogComponent>,
  ) {}

  ngOnInit() {
    this.data.type = 'isi';
  }

  cancel() {
    this.ref.close(null);
  }

  confirm() {
    this.ref.close(this.data);
  }

  delete() {
    this.ref.close(false);
  }

}
