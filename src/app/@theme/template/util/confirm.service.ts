import { Injectable, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { ConfirmComponent } from './confirm/confirm.component';

@Injectable()
export class ConfirmService {

  constructor(private dialogService: NbDialogService) { }

  public content: string;

  confirm(content: string): Observable<boolean> {
    this.content = content;
    return new Observable((observer) => {
      this.dialogService.open(ConfirmComponent, {closeOnBackdropClick: false, closeOnEsc: false})
        .onClose.subscribe((confirm) => {
          observer.next(confirm);
          observer.complete();
          return {unsubscribe() {}};
      });
    });
  }

}
