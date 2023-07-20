<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#each data.books as book}
	<p>{book.author}</p>
	<p>{book.title}</p>
{/each}
