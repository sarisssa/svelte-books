<script lang="ts">
	import '../app.postcss';
</script>

<div class="bg-gray-800 min-h-screen">
	<header class="bg-black text-white w-full h-20 flex justify-center items-center">
		<span class="text-3xl">Book Service</span>
	</header>

	<main class="h-full">
		<slot />
	</main>
</div>

<!--  
npx svelte-add@latest tailwindcss pnpm install
-->
