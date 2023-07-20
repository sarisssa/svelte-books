import { PUBLIC_API_BASE_URL } from '$env/static/public';
import type { IBook } from '../clients/books/types';

export async function load({ fetch }) {
	const url = new URL(`${PUBLIC_API_BASE_URL}/books`);
	url.searchParams.set('id', '64b80557c8c940660f61f120');

	const book = (await fetch(url.toString(), {
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	}).then((x) => x.json())) as Promise<IBook>;

	return {
		books: [book]
	};
}
