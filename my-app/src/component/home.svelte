<script>
	let showMore = false;
	
	const skills = [
		'JavaScript',
		'React',
		'Vue.js',
		'Svelte',
		'Tailwind CSS',
		'Node.js',
		'TypeScript',
		'MongoDB'
	];

 	const socialLinks = [
		{
			name: 'GitHub',
			url: 'https://github.com/Amjad-722',
			icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
		},
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/amjadali72/',
			icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
		},
		{
			name: 'Upwork',
			url: 'https://www.upwork.com/freelancers/~01c4136c175ff03b3a',
			icon: 'M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3.002-2.439-5.453-5.439-5.453z'
		},
		{
			name: 'Fiverr',
			url: 'https://fiverr.com/amjadali',
			icon: 'M23.004 15.588a.995.995 0 1 1 .002-1.99.995.995 0 0 1-.002 1.99zm-3.01-5.588h-.004c-2.15 0-3.89 1.74-3.89 3.89s1.74 3.89 3.89 3.89h.004c2.15 0 3.89-1.74 3.89-3.89s-1.74-3.89-3.89-3.89zm0 6.26c-1.31 0-2.37-1.06-2.37-2.37s1.06-2.37 2.37-2.37h.004c1.31 0 2.37 1.06 2.37 2.37s-1.06 2.37-2.37 2.37h-.004zm-6.99-6.26h-.004c-2.15 0-3.89 1.74-3.89 3.89s1.74 3.89 3.89 3.89h.004c2.15 0 3.89-1.74 3.89-3.89s-1.74-3.89-3.89-3.89zm0 6.26c-1.31 0-2.37-1.06-2.37-2.37s1.06-2.37 2.37-2.37h.004c1.31 0 2.37 1.06 2.37 2.37s-1.06 2.37-2.37 2.37h-.004zm-6.99-6.26h-.004c-2.15 0-3.89 1.74-3.89 3.89s1.74 3.89 3.89 3.89h.004c2.15 0 3.89-1.74 3.89-3.89s-1.74-3.89-3.89-3.89zm0 6.26c-1.31 0-2.37-1.06-2.37-2.37s1.06-2.37 2.37-2.37h.004c1.31 0 2.37 1.06 2.37 2.37s-1.06 2.37-2.37 2.37h-.004zM0 10h1.5v7.5H0V10z'
		}
		
	];
</script>

<!-- Hero Section -->
<div
	class="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-green-900 to-slate-900"
>
	<!-- Background Pattern -->
	<div class="absolute inset-0 opacity-20 bg-[url(/bg-img.JPG)] bg-center bg-cover bg-no-repeat"></div>

	<!-- Navigation -->
	

	<!-- Main Content -->
	<div class="relative z-10 grid min-h-[80vh] grid-cols-1 lg:grid-cols-2 items-center gap-12 px-4 lg:px-20">
		<!-- Left Side - Content -->
		<div class="flex flex-col items-start text-left space-y-8">
			<!-- Main Heading -->
			<h1 class="text-5xl font-bold leading-tight text-white lg:text-7xl">
				Hi, I'm <span
					class="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
					>Amjad Ali</span
				>
			</h1>

			<!-- Subtitle -->
			<p class="max-w-2xl text-xl text-gray-300 lg:text-2xl">
				A passionate <span class="font-semibold text-green-400">Front-End Developer</span> crafting beautiful,
				responsive web experiences with modern technologies.
			</p>

			<!-- CTA Button -->
			<button
				on:click={() => (showMore = !showMore)}
				class="transform rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-green-600 hover:to-emerald-600 hover:shadow-xl"
			>
				{showMore ? 'Show Less' : 'More About Me'}
			</button>

			<!-- Social Links -->
			<div class="flex gap-6">
				{#each socialLinks as link}
					<a
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
						class="group flex h-12 w-12 transform items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20"
						title={link.name}
						aria-label={link.name}
					>
						<svg
							class="h-6 w-6 fill-current text-gray-300 transition-colors group-hover:text-white"
							viewBox="0 0 24 24"
						>
							<path d={link.icon} />
						</svg>
					</a>
				{/each}
			</div>
		</div>

		<!-- Right Side - Profile Image -->
		<div class="flex justify-center lg:justify-end">
			<div class="relative">
				<!-- Decorative Background Circle -->
				<div class="absolute -inset-4 rounded-full bg-gradient-to-r from-green-400/20 to-emerald-400/20 blur-xl"></div>
				
				<!-- Profile Image Container -->
				<div
					class="relative h-80 w-80 overflow-hidden rounded-full border-4 border-white/20 bg-gradient-to-r from-green-400 to-emerald-400 p-2 shadow-2xl"
				>
					<div class="h-full w-full overflow-hidden rounded-full bg-white">
						<img
							src="/my-profile.png"
							alt="Amjad Ali - Front End Developer"
							class="h-full w-full object-cover"
						/>
					</div>
				</div>
				
				<!-- Floating Elements -->
				<div class="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-green-400 animate-pulse"></div>
				<div class="absolute -bottom-6 -left-6 h-6 w-6 rounded-full bg-emerald-400 animate-bounce"></div>
			</div>
		</div>
	</div>

	<!-- Additional Info Section (Full Width) -->
	{#if showMore}
		<div class="relative z-10 px-4 lg:px-20 pb-12">
			<div class="max-w-4xl mx-auto rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm">
				<h3 class="mb-6 text-3xl font-bold text-white text-center">About Me</h3>
				<p class="leading-relaxed text-gray-300 text-lg mb-8 text-center">
					I specialize in creating modern, responsive websites using cutting-edge technologies like
					React, Vue, Svelte, and more. With a keen eye for design and a passion for clean code, I
					bring ideas to life through engaging user experiences.
				</p>
				<div class="flex flex-wrap justify-center gap-4">
					{#each skills as skill}
						<span class="rounded-full bg-green-500/20 px-4 py-2 text-sm text-green-300 font-medium border border-green-500/30">
							{skill}
						</span>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</div>
