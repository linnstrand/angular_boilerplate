export class ApiError extends Error {
	url: string;
	constructor(error: any, message: string, url: string) {
		super(message);
		this.name = error.name;
		this.url = url;
		Object.setPrototypeOf(this, ApiError.prototype);
	}
}

export class FormError extends TypeError {
	constructor(error: TypeError) {
		super(error.message);
		Object.setPrototypeOf(this, FormError.prototype);
	}
}

export class UserError extends Error {
	constructor(error: any, message: string) {
		super(message);
		this.name = error.name;
		Object.setPrototypeOf(this, UserError.prototype);
	}
}
