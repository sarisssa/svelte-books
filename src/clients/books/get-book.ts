import { PUBLIC_API_BASE_URL } from '$env/static/public';
import type { IBook } from './types';

export const getBook = (id: string) => {
	const url = new URL(`${PUBLIC_API_BASE_URL}/books`);
	url.searchParams.set('id', id);

	return fetch(url.toString(), {
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	}).then((x) => x.json()) as Promise<IBook>;
};
