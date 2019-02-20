import { Component, Inject, Input } from '@angular/core';
// import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-confirm-dialog',
    templateUrl: './confirm-dialog.component.html'
})
export class ConfirmDialogComponent {
    @Input() data;
    // constructor(public activeModal: NgbActiveModal) { }

    // onClose(reason: any): void {
    //     this.activeModal.close(reason);
    // }

    // onDismiss(reason: any): void {
    //     this.activeModal.dismiss(reason);
    // }
}
