import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors, ValidatorFn, FormGroup } from '@angular/forms';

export function totalTimeExceededValidator(maxAllowed: number, minutes: string, hours: string): ValidatorFn {
	return (group: FormGroup): { [key: string]: any } | null => {
		const min = group.get(minutes);
		const tim = group.get(hours);

		if (tim && min) {
			const timVal = tim.value || 0;
			const current = timVal + min.value / 60;

			return maxAllowed >= current ? null : { totalTimeExceeded: true };
		}
		return { totalTimeExceeded: true };
	};
}

export function minTimeValidator(minutes: string, hours: string): ValidatorFn {
	return (group: FormGroup): { [key: string]: any } | null => {
		const min = group.get(minutes);
		const tim = group.get(hours);

		if (tim && min) {
			const current = tim.value + min.value / 60;
			return current <= 0 ? { minTime: true } : null;
		}
		return { minTime: true };
	};
}

@Directive({
	selector: '[appTotalTimeExceeded]',
	providers: [ { provide: NG_VALIDATORS, useExisting: TimeValidationDirective, multi: true } ]
})
export class TimeValidationDirective implements Validator {
	@Input() maxAllowed: number;
	@Input() minutes: string;
	@Input() hours: string;
	validate(control: AbstractControl): ValidationErrors {
		return totalTimeExceededValidator(this.maxAllowed, this.minutes, this.hours)(control);
	}
}
