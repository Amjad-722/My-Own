<script lang="ts">
	import { page } from '$app/stores';

	$: currentPath = $page.url.pathname;

	const navItems = [
		{ name: 'Home', path: '/' },
		{ name: 'Services', path: '/services' },
		{ name: 'About', path: '/about' },
		{ name: 'Contact', path: '/contact' }
	];

	function isActive(path: string) {
		if (path === '/' && currentPath === '/') return true;
		if (path !== '/' && currentPath.startsWith(path)) return true;
		return false;
	}
</script>

<div class="overflow-hidden bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
	<nav class=" flex justify-center py-6">
		<ul class="flex gap-8 font-medium text-white">
			{#each navItems as item}
				<li>
					<a
						href={item.path}
						class={ isActive(item.path)
							? 'font-semibold text-green-400'
							: 'transition-colors hover:text-green-300'}
					>
						{item.name}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</div>
