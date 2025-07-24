<script lang="ts">
	import '../app.css';
	import Navbar from '../component/navbar.svelte';

	let { children } = $props();
</script>

<main>
	


	<Navbar/>

	<slot/>
</main>
