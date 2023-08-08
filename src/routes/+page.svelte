<script lang="ts">
	import { PUBLIC_API_BASE_URL } from '$env/static/public';
	import type { PageData } from './$types';

	export let data: PageData;

	let deletePromise: Promise<any>;

	async function deleteRecord(bookId: string) {
		deletePromise = fetch(`${PUBLIC_API_BASE_URL}/books?id=${bookId}`, {
			method: 'DELETE'
		});

		// await deletePromise;
	}
</script>

<div class="h-full flex justify-center items-center text-white">
	<table class="[&_td]:p-4">
		<thead>
			<tr>
				<th>Author</th>
				<th>Title</th>
				<th>Publication Year</th>
				<th>Genre</th>
			</tr>
		</thead>
		<tbody>
			{#each data.books as book}
				<tr>
					<td>{book.author}</td>
					<td>{book.title}</td>
					<td
						>{new Date(book.pubYear).toLocaleDateString('nl', {
							day: '2-digit',
							month: '2-digit',
							year: 'numeric'
						})}</td
					>
					<td>{book.genre}</td>
					<td><button>Edit</button></td>
					<td
						><button on:click={() => deleteRecord(book.id)}>Delete</button>
						{#await deletePromise}
							<span>Deleting...</span>
						{:catch error}
							<span>Error when deleting book: {error}</span>
						{/await}</td
					>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
