import { PUBLIC_API_BASE_URL } from '$env/static/public';

export const listBooks = () => {
    return fetch(`${PUBLIC_API_BASE_URL}/books?=`)
}