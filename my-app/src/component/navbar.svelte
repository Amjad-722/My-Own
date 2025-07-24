<script lang="ts">
	import { page } from '$app/stores';

	// Normalize paths to handle trailing slashes
	$: currentPath = $page.url.pathname.replace(/\/$/, '');

	const navItems = [
		{ name: 'Home', path: '/' },
		{ name: 'Services', path: '/services' },
		{ name: 'About', path: '/about' },
		{ name: 'Contact', path: '/contact' }
	];

	function isActive(path: string) {
		// Normalize the item path for comparison
		const normalizedItemPath = path.replace(/\/$/, '');
		return currentPath === normalizedItemPath;
	}

	// Debug logging to track changes
	$: {
		console.log('Current path:', currentPath);
		navItems.forEach(item => {
			console.log(`${item.name} (${item.path}): ${isActive(item.path) ? 'ACTIVE' : 'inactive'}`);
		});
	}
</script>

<div class="overflow-hidden bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
	<nav class="flex justify-center py-6">
		<ul class="flex gap-8 font-medium text-white">
			{#each navItems as item}
				<li>
					<a
						href={item.path}
						class="{isActive(item.path)
							? 'font-semibold text-green-400'
							: 'transition-colors hover:text-green-300'}"
					>
						{item.name}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</div>