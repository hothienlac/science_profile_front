import { Injectable, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { ConfirmComponent } from './confirm/confirm.component';

@Injectable()
export class ConfirmService {

  constructor(private dialogService: NbDialogService) { }

  confirm(content: string): Observable<boolean> {
    return new Observable((observer) => {
      this.dialogService.open(ConfirmComponent, {
            closeOnBackdropClick: false,
            closeOnEsc: false,
            context: {content: content},
        })
        .onClose.subscribe((confirm) => {
          observer.next(confirm);
          observer.complete();
          return {unsubscribe() {}};
      });
    });
  }

}
