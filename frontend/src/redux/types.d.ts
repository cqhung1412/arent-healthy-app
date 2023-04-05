export type User = {
	id: number;
	email: string;
};

export type Action = {
	type: string;
	payload?: any;
	error?: Error;
};
