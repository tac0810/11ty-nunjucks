// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/e84e5c6f58ef6fcfa00a6354b1a43ba7e55dec75/types/react/index.d.ts#L2195-L2217
export type FormItemTypes =
	| "button"
	| "checkbox"
	| "color"
	| "date"
	| "datetime-local"
	| "email"
	| "file"
	| "hidden"
	| "image"
	| "month"
	| "number"
	| "password"
	| "radio"
	| "range"
	| "reset"
	| "search"
	| "submit"
	| "tel"
	| "text"
	| "time"
	| "url"
	| "week"
	| "select"
	| (string & {});

export type FormItemValidations =
	| "required"
	| "email"
	| "phone"
	| "url"
	| "same:"
	| "min:"
	| "max:"
	| "file:"
	| "size:"
	| "hiragana"
	| "katakana"
	| (string & {});

export interface FormItem {
	name: string;
	label: string;
	type: FormItemTypes;
	validations?: FormItemValidations[];
	options?: {
		initialValue: any;
		attributes?: Record<string, string>;
		data?: {
			label: string;
			value?: string;
		}[];
		dependsOn?: {
			[key: string]: {
				shows?: string[];
				ignores?: string[];
			};
		};
	};
}

export interface FormConfig {
	readonly meta: {
		title: string;
	};

	readonly overrides?: any;

	readonly replies: {
		admin: string[];
	};

	readonly fields: (FormItem | FormItem[])[];
}
