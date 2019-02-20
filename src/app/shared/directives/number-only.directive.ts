import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ selector: '[appNumbersOnly]' })
export class NumberOnlyDirective {

    constructor(private el: ElementRef) { }

    @HostListener('keydown', ['$event']) onkeydown(event) {
        const e = <KeyboardEvent>event;
        const key: string = e.key.toString() || e.keyCode.toString();

        const allowedKeys = ['Backspace', 'Enter', 'Delete', 'Del', 'Escape', 'Esc', 'ArrowLeft', 'Left', 'ArrowRight', 'Right', 'Tab', 'End', 'Home'];
        if (allowedKeys.indexOf(key.toString()) > -1) {
            return;
        }
        if (key.match('[0-9]')) {
            const current = this.el.nativeElement.value;
            if (current.length < 2) {
                return;
            }
        }
        e.preventDefault();
    }
}
