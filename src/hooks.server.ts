// import type { Handle } from '@sveltejs/kit';

// export const handle: Handle = async ({ resolve, event }) => {
// 	// Apply CORS header for API routes
// 	if (event.url.pathname.startsWith('/api')) {
// 		// Required for CORS to work
// 		if (event.request.method === 'OPTIONS') {
// 			return new Response(null, {
// 				headers: {
// 					'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
// 					'Access-Control-Allow-Origin': '*',
// 					'Access-Control-Allow-Headers': '*'
// 				}
// 			});
// 		}
// 	}

// 	const response = await resolve(event);
// 	if (event.url.pathname.startsWith('/api')) {
// 		response.headers.append('Access-Control-Allow-Origin', `*`);
// 	}
// 	return response;
// };

// // Inside handle()
// const validDomains = /^(.*)?\.?example\.com$/;

// let cors = false;

// let originDomain = null;
// try {
// 	originDomain = new URL(event.request.headers.get('origin') || '').hostname;
// 	if (validDomains.test(originDomain)) {
// 		cors = `https://${originDomain}`;
// 	}
// } catch (e) {
// 	console.log('Invalid origin', e);
// }

// //...
// if (event.request.method === 'OPTIONS' && cors) {
// 	return new Response(null, {
// 		headers: {
// 			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
// 			'Access-Control-Allow-Origin': cors,
// 			'Access-Control-Allow-Headers': '*'
// 		}
// 	});
// }

// //...
// response.headers.append('Access-Control-Allow-Origin', cors);
